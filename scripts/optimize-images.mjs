// Re-encodes portfolio creatives from assets-src/creatives into client/public/creatives as WebP:
// <slug>.webp (max 1080px wide, ≤ 250 KB) and <slug>-540.webp, then updates works.json paths and sizes.
//   node scripts/optimize-images.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const srcDir = path.join(root, "assets-src/creatives");
const outDir = path.join(root, "client/public/creatives");
const worksPath = path.join(root, "client/src/data/works.json");
const MAX_BYTES = 250 * 1024;

async function encode(input, width, file, maxBytes) {
  // Step quality down until the file fits the budget
  for (let quality = 82; quality >= 40; quality -= 6) {
    const buf = await sharp(input).resize({ width, withoutEnlargement: true }).webp({ quality, effort: 5 }).toBuffer();
    if (!maxBytes || buf.length <= maxBytes || quality <= 46) {
      fs.writeFileSync(file, buf);
      return { bytes: buf.length, quality, ...(await sharp(buf).metadata()) };
    }
  }
}

const works = JSON.parse(fs.readFileSync(worksPath, "utf8"));
fs.mkdirSync(outDir, { recursive: true });

for (const c of works.creatives) {
  const input = path.join(srcDir, c.source);
  const large = await encode(input, 1080, path.join(outDir, `${c.slug}.webp`), MAX_BYTES);
  const small = await encode(input, 540, path.join(outDir, `${c.slug}-540.webp`), 90 * 1024);
  c.image = `/creatives/${c.slug}.webp`;
  c.thumb = `/creatives/${c.slug}-540.webp`;
  c.width = large.width;
  c.height = large.height;
  console.log(`${c.slug}: ${Math.round(large.bytes / 1024)} KB (q${large.quality}), 540w ${Math.round(small.bytes / 1024)} KB`);
}

fs.writeFileSync(worksPath, `${JSON.stringify(works, null, 2)}\n`);
