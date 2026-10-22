const worker = (await import(new URL("../dist/server/index.js", import.meta.url))).default;
const response = await worker.fetch(
  new Request("https://local.test/api/reb?type=sale&date=2026-09-30"),
  { REB_API_KEY: process.env.REB_API_KEY },
  {},
);
const body = await response.json();
if (!response.ok) throw new Error(`REB proxy test failed: ${response.status}`);
console.log(JSON.stringify({
  status: response.status,
  source: body.source,
  priceLatest: body.price.latest,
  volumeLatest: body.volume.latest,
  priceSeriesCount: body.price.series.length,
}));
