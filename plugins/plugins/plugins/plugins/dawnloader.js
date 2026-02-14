import fetch from 'node-fetch';
import { MEDIA_API } from '../config.js';

export async function handleDownloader(command, args, reply, sock, msg) {
  const url = args[0];

  if (['ytmp3', 'ytmp4', 'tiktok', 'instagram', 'facebook2'].includes(command)) {
    if (!url) {
      await reply(`Tuma link, mfano:\n.${command} https://...`);
      return true;
    }
    await reply(`⏳ *Broken Lord* inaprocess ${command}...`);

    try {
      const res = await fetch(`${MEDIA_API}/${command}?url=${encodeURIComponent(url)}`);
      const data = await res.json();

      if (!data || !data.result) {
        await reply('❌ Sijapata data sahihi kutoka API.');
        return true;
      }

      if (data.result.audio) {
        await sock.sendMessage(msg.key.remoteJid, {
          audio: { url: data.result.audio },
          mimetype: 'audio/mpeg'
        }, { quoted: msg });
      } else if (data.result.video) {
        await sock.sendMessage(msg.key.remoteJid, {
          video: { url: data.result.video },
          caption: 'Broken Lord Download'
        }, { quoted: msg });
      } else if (data.result.url) {
        await reply(data.result.url);
      } else {
        await reply('✅ Download link:\n' + JSON.stringify(data.result, null, 2));
      }
    } catch (e) {
      await reply('❌ Hitilafu kwenye media API.');
    }
    return true;
  }

  return false;
}
