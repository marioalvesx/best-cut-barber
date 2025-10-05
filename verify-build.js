const fs = require("fs");
const path = require("path");

const manifestPath = path.join(__dirname, ".next", "routes-manifest.json");

if (!fs.existsSync(manifestPath)) {
  console.error("❌ routes-manifest.json não foi gerado!");
  process.exit(1);
}

console.log("✅ Build verificado com sucesso");
