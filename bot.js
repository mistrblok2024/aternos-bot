const { createClient } = require('bedrock-protocol');

const client = createClient({
  host: 'MistrBlok2024-fPaG.aternos.me',
  port: 55411,
  username: 'AFKBot24'
});

client.on('spawn', () => {
  console.log('البوت متصل الآن بسيرفر أترنوس بنجاح سحابياً!');
});

client.on('error', (err) => {
  console.log('خطأ في الاتصال:', err);
});
