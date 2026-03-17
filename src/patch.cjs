const fs = require('fs');
const p = '/data/.openclaw/openclaw.json';
try {
  const c = JSON.parse(fs.readFileSync(p, 'utf8'));
  if (!c.gateway) c.gateway = {};
  if (!c.gateway.controlUi) c.gateway.controlUi = {};
  c.gateway.controlUi.allowedOrigins = ['https://openclaw-production-0173.up.railway.app'];
  fs.writeFileSync(p, JSON.stringify(c, null, 2));
  console.log('patched ok');
} catch(e) {
  console.log('patch error:', e.message);
}
