export async function handleSticker(command, args, reply, sock, msg) {
  if (!['sticker', 's'].includes(command)) return false;

  const quoted =
    msg.message?.imageMessage ||
    msg.message?.videoMessage ||
    msg.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage ||
    msg.message?.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage;

  if (!quoted) {
    await reply('Tuma picha au video ukitumia caption *.sticker*');
    return true;
  }

  await sock.sendMessage(
    msg.key.remoteJid,
    { sticker: quoted },
    { quoted: msg }
  );
  return true;
}
