// Fetches stock quotes server-side (Naver/Yahoo block browser requests from other sites)
// and writes wealth/prices.json for dkmakes.com/wealth to read.
import { writeFileSync } from 'node:fs';

const KR = ['498400', '475720'];      // 국내: 종목코드
const US = ['QQQM', 'VTI', 'SCHD'];   // 미국: 티커

const UA = { 'User-Agent': 'Mozilla/5.0' };
const json = async u => { const r = await fetch(u, { headers: UA }); if (!r.ok) throw new Error(`${r.status} ${u}`); return r.json(); };
const yahoo = async s => (await json(`https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(s)}?range=1d&interval=1d`)).chart.result[0].meta.regularMarketPrice;

const out = { t: new Date().toISOString(), usdkrw: null, kr: {}, us: {} };
await Promise.all([
  yahoo('KRW=X').then(v => { out.usdkrw = v; }),
  ...KR.map(async c => {
    const d = await json(`https://polling.finance.naver.com/api/realtime/domestic/stock/${c}`);
    const p = parseFloat(String(d.datas[0].closePrice).replace(/,/g, ''));
    if (p > 0) out.kr[c] = p;
  }),
  ...US.map(async s => { const p = await yahoo(s); if (p > 0) out.us[s] = p; }),
].map(p => p.catch(e => console.error(e.message))));

if (!out.usdkrw && !Object.keys(out.kr).length) { console.error('no prices'); process.exit(1); }
writeFileSync('wealth/prices.json', JSON.stringify(out) + '\n');
console.log(out);
