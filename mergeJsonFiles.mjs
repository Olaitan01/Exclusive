import { readFile, writeFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import path from 'path';

// Define __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read FlashSales.json
const flashSalesPath = path.join(__dirname, 'src/json/FlashSales.json');
const flashSales = JSON.parse(await readFile(flashSalesPath, 'utf-8'));

// Read BestSelling.json
const bestSellingPath = path.join(__dirname, 'src/json/BestSelling.json');
const bestSelling = JSON.parse(await readFile(bestSellingPath, 'utf-8'));

// Read products.json
const productsPath = path.join(__dirname, 'src/json/products.json');
const products = JSON.parse(await readFile(productsPath, 'utf-8'));


// Combine data
const combinedData = {
  flashSales,
  bestSelling,
  products
};

// Write to db.json
const dbPath = path.join(__dirname, 'src/json/db.json');
await writeFile(dbPath, JSON.stringify(combinedData, null, 2), 'utf-8');

console.log('JSON files have been merged!');
