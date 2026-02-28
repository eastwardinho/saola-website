const fs = require('fs');
const path = require('path');

const PRODUCTS_FILE = path.join(__dirname, 'src/lib/products.ts');
const IMG_DIR = path.join(__dirname, 'public/images/products');

const files = fs.readdirSync(IMG_DIR);
const aiProducts = new Map();

for (const f of files) {
  const m = f.match(/^(.+)-(studio|lifestyle|detail)\.png$/);
  if (m) {
    const slug = m[1];
    if (!aiProducts.has(slug)) aiProducts.set(slug, []);
    aiProducts.get(slug).push("/images/products/" + f);
  }
}

console.log("Found " + aiProducts.size + " products with AI images");

let ts = fs.readFileSync(PRODUCTS_FILE, 'utf8');
let updated = 0;

for (const [slug, images] of aiProducts) {
  images.sort((a, b) => {
    const order = { studio: 0, lifestyle: 1, detail: 2 };
    const aS = a.match(/-(\w+)\.png$/)[1];
    const bS = b.match(/-(\w+)\.png$/)[1];
    return (order[aS] || 9) - (order[bS] || 9);
  });

  const regex = new RegExp(
    "(slug:\\s*'" + slug.replace(/-/g, "\\-") + "'[\\s\\S]*?images:\\s*\\[)[^\\]]*?(\\])"
  );
  
  const imgStr = images.map(i => "'" + i + "'").join(", ");
  const newTs = ts.replace(regex, "$1" + imgStr + "$2");
  if (newTs !== ts) {
    ts = newTs;
    updated++;
    console.log("  ✅ " + slug + " → " + images.length + " images");
  } else {
    console.log("  ⚠️  " + slug + " — no match");
  }
}

fs.writeFileSync(PRODUCTS_FILE, ts);
console.log("\nUpdated " + updated + "/" + aiProducts.size);
