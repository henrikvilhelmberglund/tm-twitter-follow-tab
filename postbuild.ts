import fs from "fs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import open from 'open';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Find files in a directory by extension
 * @param {string} dir - The directory to search in
 * @param {string} ext - The extension to search for (e.g., '.txt')
 * @returns {Promise<string[]>} - A promise that resolves to an array of file names
 */
function findFilesByExtension(dir, ext) {
  return new Promise((resolve, reject) => {
    fs.readdir(dir, (err, files) => {
      if (err) {
        return reject(err);
      }
      
      const filteredFiles = files.filter(file => path.extname(file) === ext);
      resolve(filteredFiles);
    });
  });
}

const file = await findFilesByExtension(`${__dirname}/dist`, ".js");
console.log(file)

await open(`${__dirname}/dist/${file}`, { app: { name: 'msedge'} });
