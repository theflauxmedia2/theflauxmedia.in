// Builds the default 1200×630 Open Graph image: best portfolio creative + logo + tagline.
//   node scripts/make-og.mjs
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(root, "client/public/og/default.jpg");
const photo = path.join(root, "assets-src/creatives/01.webp");
const logo = path.join(root, "client/public/logo/logo.png");

const W = 1200;
const H = 630;
const PHOTO_W = 520;

const photoBuf = await sharp(photo).resize(PHOTO_W, H, { fit: "cover", position: "centre" }).toBuffer();
const logoBuf = await sharp(logo).resize({ height: 96 }).toBuffer();

// Left-to-right fade so the photo melts into the dark panel
const fade = Buffer.from(
  `<svg width="${PHOTO_W}" height="${H}"><defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#0a0a0a" stop-opacity="1"/><stop offset="0.35" stop-color="#0a0a0a" stop-opacity="0"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>`,
);

const text = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <style>
    .head { font: 700 64px 'Helvetica Neue', Arial, sans-serif; fill: #f2eee8; letter-spacing: -1.5px; }
    .accent { font: italic 400 64px Georgia, 'Times New Roman', serif; fill: #f76300; }
    .meta { font: 500 22px 'Helvetica Neue', Arial, sans-serif; fill: #8f8a84; letter-spacing: 3px; }
  </style>
  <text x="72" y="300" class="head">Reels, posters &amp;</text>
  <text x="72" y="372" class="head">brand films that</text>
  <text x="72" y="444" class="accent">stop the scroll.</text>
  <text x="72" y="560" class="meta">THE FLAUX MEDIA · SOUTH BENGALURU</text>
</svg>`);

fs.mkdirSync(path.dirname(out), { recursive: true });
await sharp({ create: { width: W, height: H, channels: 3, background: "#0a0a0a" } })
  .composite([
    { input: photoBuf, left: W - PHOTO_W, top: 0 },
    { input: fade, left: W - PHOTO_W, top: 0 },
    { input: logoBuf, left: 72, top: 64 },
    { input: text, left: 0, top: 0 },
  ])
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(out);

console.log(`Wrote ${path.relative(root, out)}`);
