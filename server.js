import express from 'express';
import makeWASocket, { useMultiFileAuthState } from '@whiskeysockets/baileys';
import qrcode from 'qrcode-terminal';

const app = express();

app.get('/', (req, res) => {
  res.send('Broken Lord Bot is running.');
});

app.get('/pair', async (req, res) => {
  const { state, saveCreds } = await useMultiFileAuthState('./auth_info_vercel');

  const sock = makeWASocket({
    printQRInTerminal: true,
    auth: state,
    browser: ['Broken Lord Pair', 'Chrome', '1.0.0']
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('connection.update', (update) => {
    const { qr } = update;
    if (qr) {
      console.log('Scan this QR (Vercel logs):');
      qrcode.generate(qr, { small: true });
    }
  });

  res.send('Open Vercel logs to see QR code for pairing.');
});

app.get('/code', async (req, res) => {
  // hapa unaweza baadaye kubadilisha mfumo wa code kuwa advanced
  const code = 'pair-' + Math.floor(1000 + Math.random() * 9000) + '-' + Math.floor(1000 + Math.random() * 9000);
  console.log('Pairing code:', code);
  res.send(`Your Broken Lord pairing code: ${code}`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Broken Lord server running on ${port}`));
