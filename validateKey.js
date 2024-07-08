// validateKey.js
import axios from 'axios';
import fs from 'fs';
import path from 'path';
const npmrcPath = path.join(process.cwd(), '.npmrc');
const npmrcContent = fs.readFileSync(npmrcPath, 'utf-8');
const apiKeyMatch = npmrcContent.match(/:_authToken=(.*)/);

if (!apiKeyMatch) {
  console.error('No API key found in .npmrc');
  process.exit(1);
}

const apiKey = apiKeyMatch[1];

axios
  .get(`http://localhost:3000/validate-key?key=${apiKey}`)
  .then(response => {
    if (response.data.valid) {
      console.log('API key is valid. Proceeding with npm install...');
    } else {
      console.error('Invalid API key. Aborting npm install.');
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('Error validating API key:', error);
    process.exit(1);
  });
