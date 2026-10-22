// Copies the Polish strings from translations.js into the HTML files,
// so the page has real content without JavaScript (ATS, link previews).
// Run after editing Polish text:  node scripts/sync-pl-html.js
// Add --check to only report elements that are out of date.

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const files = ["index.html", "projekt-opyleo.html", "projekt-gesly.html"];
const check = process.argv.includes("--check");

// Evaluate only the TRANSLATIONS object, not the browser engine below it
const src = fs.readFileSync(path.join(root, "translations.js"), "utf8").replace(/\r\n/g, "\n");
const engineAt = src.indexOf("// ============================================================\n//  ENGINE");
if (engineAt < 0) throw new Error("ENGINE marker not found in translations.js");
const objSrc = src.slice(0, engineAt);
const ctx = {};
vm.runInNewContext(objSrc + "\nthis.T = TRANSLATIONS;", ctx);
const pl = ctx.T.pl;

const re = /(<(\w+)\b[^>]*\bdata-i18n="([\w-]+)"[^>]*>)([\s\S]*?)(<\/\2>)/g;
let stale = 0;

for (const file of files) {
  const full = path.join(root, file);
  const html = fs.readFileSync(full, "utf8");
  const out = html.replace(re, (m, open, tag, key, inner, close) => {
    if (pl[key] === undefined) {
      console.warn(`${file}: missing key "${key}"`);
      return m;
    }
    if (inner !== pl[key]) stale++;
    return open + pl[key] + close;
  });
  if (!check && out !== html) {
    fs.writeFileSync(full, out, "utf8");
    console.log(`updated ${file}`);
  }
}

if (check && stale) {
  console.error(`${stale} element(s) differ from translations.js — run without --check`);
  process.exit(1);
}
