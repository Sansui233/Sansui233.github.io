import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const sourceDir = path.join(rootDir, "server-data");
const outputFile = path.join(rootDir, "client-data.json");

function collectTxtFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...collectTxtFiles(fullPath));
    } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".txt")) {
      files.push(fullPath);
    }
  }

  return files.sort((a, b) => a.localeCompare(b));
}

function normalizeCaption(text) {
  return text.replace(/^\uFEFF/, "").replace(/\s+/g, " ").trim();
}

function splitCaptionWords(caption) {
  return caption
    .split(",")
    .map((word) => word.trim())
    .filter(Boolean);
}

function splitWords(captionWords) {
  return captionWords.flatMap((captionWord) =>
    captionWord
      .split(/\s+/)
      .map((word) => word.trim())
      .filter(Boolean),
  );
}

function countValues(values) {
  return values.reduce((counts, value) => {
    counts[value] = (counts[value] || 0) + 1;
    return counts;
  }, {});
}

function sortFrequency(counts) {
  return Object.fromEntries(
    Object.entries(counts).sort(([aWord, aCount], [bWord, bCount]) => {
      if (bCount !== aCount) {
        return bCount - aCount;
      }

      return aWord.localeCompare(bWord);
    }),
  );
}

if (!fs.existsSync(sourceDir)) {
  throw new Error(`Source directory not found: ${sourceDir}`);
}

const txtFiles = collectTxtFiles(sourceDir);
const captions = txtFiles
  .map((file) => normalizeCaption(fs.readFileSync(file, "utf8")))
  .filter(Boolean);
const captionWords = captions.flatMap(splitCaptionWords);
const words = splitWords(captionWords);

const clientData = {
  generatedAt: new Date().toISOString(),
  sourceDir: path.basename(sourceDir),
  fileCount: txtFiles.length,
  captionCount: captions.length,
  captions,
  captionFrequency: sortFrequency(countValues(captionWords)),
  wordFrequency: sortFrequency(countValues(words)),
};

fs.writeFileSync(outputFile, `${JSON.stringify(clientData, null, 2)}\n`, "utf8");

console.log(`Compiled ${txtFiles.length} txt files to ${path.basename(outputFile)}`);
