import { OWNER_NAME, OWNER_NUMBER, BOT_NAME } from '../config.js';

export async function handleOwner(command, args, reply) {
  if (command === 'owner') {
    await reply(`👑 *Owner:* ${OWNER_NAME}\n📞 wa.me/${OWNER_NUMBER}`);
    return true;
  }
  if (command === 'alive') {
    await reply(`✅ *${BOT_NAME}* is online and alive.`);
    return true;
  }
  if (command === 'ping') {
    await reply('🏓 Pong!');
    return true;
  }
  return false;
}
