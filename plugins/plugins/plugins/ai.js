import fetch from 'node-fetch';
import { AI_API } from '../config.js';

export async function handleAI(command, args, reply) {
  if (command === 'ai') {
    if (!args[0]) {
      await reply('Tuma meseji, mfano:\n.ai andika caption ya love');
      return true;
    }
    const prompt = args.join(' ');
    await reply('⏳ *Broken Lord AI* inafikiri...');

    try {
      const res = await fetch(`${AI_API}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });
      const data = await res.json();
      await reply(data.reply || 'AI haijajibu vizuri.');
    } catch (e) {
      await reply('❌ Hitilafu kwenye AI API.');
    }
    return true;
  }

  if (command === 'imgai') {
    if (!args[0]) {
      await reply('Tuma maelezo ya picha, mfano:\n.imgai beautiful girl in neon city');
      return true;
    }
    const prompt = args.join(' ');
    await reply('⏳ *Broken Lord Image AI* inatengeneza picha...');

    try {
      const res = await fetch(`${AI_API}/image?prompt=${encodeURIComponent(prompt)}`);
      const data = await res.json();
      if (data.url) {
        await reply(`Here is your image:\n${data.url}`);
      } else {
        await reply('Sikupata link ya picha kutoka AI API.');
      }
    } catch (e) {
      await reply('❌ Hitilafu kwenye Image AI API.');
    }
    return true;
  }

  return false;
}
