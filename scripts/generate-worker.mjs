import { readFile, writeFile } from "node:fs/promises";

const [html, css, app] = await Promise.all([
  readFile(new URL("../site/index.html", import.meta.url), "utf8"),
  readFile(new URL("../site/styles.css", import.meta.url), "utf8"),
  readFile(new URL("../site/app.js", import.meta.url), "utf8"),
]);

const worker = `const assets = {
  "/": { body: ${JSON.stringify(html)}, type: "text/html; charset=utf-8" },
  "/index.html": { body: ${JSON.stringify(html)}, type: "text/html; charset=utf-8" },
  "/styles.css": { body: ${JSON.stringify(css)}, type: "text/css; charset=utf-8" },
  "/app.js": { body: ${JSON.stringify(app)}, type: "text/javascript; charset=utf-8" },
};

const priceTables = {
  sale: { id: "A_2024_00045", label: "매매" },
  jeonse: { id: "A_2024_00050", label: "전세" },
  monthly: { id: "A_2024_00055", label: "월세" },
};

function json(data, status = 200, cache = "no-store") {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": cache,
      "x-content-type-options": "nosniff",
    },
  });
}

function rowsFrom(payload) {
  const key = Object.keys(payload).find(name => name !== "RESULT");
  return key && Array.isArray(payload[key]) ? payload[key][1]?.row || [] : [];
}

function normalize(rows, targetYm) {
  const series = rows
    .map(row => ({ ym: String(row.WRTTIME_IDTFR_ID || ""), label: row.WRTTIME_DESC || "", value: Number(row.DTA_VAL) }))
    .filter(item => /^\\d{6}$/.test(item.ym) && Number.isFinite(item.value) && item.ym <= targetYm)
    .sort((a, b) => a.ym.localeCompare(b.ym));
  const latest = series.at(-1) || null;
  const previous = series.at(-2) || null;
  const change = latest && previous && previous.value !== 0 ? (latest.value / previous.value - 1) * 100 : null;
  return { latest, previous, change, series: series.slice(-12) };
}

async function fetchRone(env, tableId, clsId, targetYear, targetYm) {
  const params = new URLSearchParams({
    STATBL_ID: tableId,
    DTACYCLE_CD: "MM",
    CLS_ID: clsId,
    ITM_ID: "100001",
    START_WRTTIME: String(Math.max(2024, targetYear - 2)),
    END_WRTTIME: targetYm,
    Type: "json",
    pIndex: "1",
    pSize: "1000",
    KEY: env.REB_API_KEY,
  });
  const response = await fetch("https://www.reb.or.kr/r-one/openapi/SttsApiTblData.do?" + params.toString(), {
    headers: { accept: "application/json" },
  });
  if (!response.ok) throw new Error("R-ONE HTTP " + response.status);
  const payload = await response.json();
  if (payload.RESULT && payload.RESULT.CODE !== "INFO-000") throw new Error("R-ONE API error");
  return rowsFrom(payload);
}

async function handleReb(request, env) {
  if (!env.REB_API_KEY) return json({ error: "REB API is not configured" }, 503);
  const url = new URL(request.url);
  const type = Object.hasOwn(priceTables, url.searchParams.get("type")) ? url.searchParams.get("type") : "sale";
  const requestedDate = /^\\d{4}-\\d{2}-\\d{2}$/.test(url.searchParams.get("date") || "") ? url.searchParams.get("date") : new Date().toISOString().slice(0, 10);
  const targetYm = requestedDate.slice(0, 7).replace("-", "");
  const targetYear = Number(requestedDate.slice(0, 4));
  try {
    const [priceRows, volumeRows] = await Promise.all([
      fetchRone(env, priceTables[type].id, "510100", targetYear, targetYm),
      fetchRone(env, "A_2024_00554", "510211", targetYear, targetYm),
    ]);
    return json({
      source: "한국부동산원 R-ONE",
      scope: "경주시",
      requestedDate,
      type,
      typeLabel: priceTables[type].label,
      price: normalize(priceRows, targetYm),
      volume: normalize(volumeRows, targetYm),
      fetchedAt: new Date().toISOString(),
    }, 200, "private, max-age=1800");
  } catch (error) {
    return json({ error: "한국부동산원 자료를 불러오지 못했습니다." }, 502);
  }
}

export default {
  async fetch(request, env, ctx) {
    void ctx;
    const url = new URL(request.url);
    if (url.pathname === "/api/reb") return handleReb(request, env);
    const asset = assets[url.pathname];
    if (!asset) return new Response("Not found", { status: 404 });
    return new Response(asset.body, {
      headers: {
        "content-type": asset.type,
        "cache-control": url.pathname === "/" || url.pathname === "/index.html" ? "no-cache" : "public, max-age=3600",
        "x-content-type-options": "nosniff",
      },
    });
  },
};
`;

await writeFile(new URL("../dist/server/index.js", import.meta.url), worker, "utf8");
