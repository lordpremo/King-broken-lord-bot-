import makeWASocket, {
  useMultiFileAuthState,
  DisconnectReason
} from '@whiskeysockets/baileys';
import { Boom } from '@hapi/boom';
import moment from 'moment-timezone';
import {
  BOT_NAME,
  OWNER_NAME,
  PREFIX,
  TIMEZONE
} from './config.js';
import { handleMenu } from './plugins/menu.js';
import { handleOwner } from './plugins/owner.js';
import { handleAI } from './plugins/ai.js';
import { handleDownloader } from './plugins/downloader.js';
import { handleSticker } from './plugins/sticker.js';

moment.tz.setDefault(TIMEZONE);

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('./auth_info');

  const sock = makeWASocket({
    printQRInTerminal: false,
    auth: state,
    browser: ['Broken Lord', 'Chrome', '1.0.0']
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === 'close') {
      const shouldReconnect =
        lastDisconnect?.error instanceof Boom &&
        lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut;
      if (shouldReconnect) startBot();
    } else if (connection === 'open') {
      console.log(`[${BOT_NAME}] Connected successfully`);
    }
  });

  sock.ev.on('messages.upsert', async ({ messages, type }) => {
    if (type !== 'notify') return;
    const msg = messages[0];
    if (!msg.message) return;

    const from = msg.key.remoteJid;
    const isGroup = from.endsWith('@g.us');

    let body =
      msg.message.conversation ||
      msg.message.extendedTextMessage?.text ||
      msg.message.imageMessage?.caption ||
      msg.message.videoMessage?.caption ||
      '';

    if (!body.startsWith(PREFIX)) return;

    const args = body.slice(PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    const reply = (text) =>
      sock.sendMessage(from, { text }, { quoted: msg });

    if (await handleMenu(command, args, reply)) return;
    if (await handleOwner(command, args, reply)) return;
    if (await handleAI(command, args, reply)) return;
    if (await handleDownloader(command, args, reply, sock, msg)) return;
    if (await handleSticker(command, args, reply, sock, msg)) return;

    await reply(`❓ *${BOT_NAME}*\nCommand *${PREFIX}${command}* haipo kwenye menu.`);
  });
}

startBot();
