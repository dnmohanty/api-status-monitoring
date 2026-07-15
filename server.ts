import express, { Request, Response } from 'express';
import 'dotenv/config';
import cors from 'cors';
import { appendFile, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const app = express();
app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SUCCESS_LOG_PATH = path.join(__dirname, 'success.log');
const ERROR_LOG_PATH = path.join(__dirname, 'error.log');

async function checkTargetUrl(): Promise<void> {
  const url = process.env.TARGET_URL;
  if (!url) return; 

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: unknown = await response.json(); 
    console.log('success:', data);

    const logEntry = JSON.stringify({ timestamp: new Date().toISOString(), data }) + '\n';
    await appendFile(SUCCESS_LOG_PATH, logEntry, 'utf8');

  } catch (error) {
    console.error('Error:', error);

    try {
      const errorMessage = error instanceof Error ? error.message : String(error);
      const errorEntry = `[${new Date().toISOString()}] Error: ${errorMessage}\n`;
      await appendFile(ERROR_LOG_PATH, errorEntry, 'utf8');
    } catch (fsError) {
      console.error('Fatal: Failed to write to error log file:', fsError);
    }
  }
}

checkTargetUrl();
setInterval(checkTargetUrl, 10000);

app.get('/api/history', async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await readFile(SUCCESS_LOG_PATH, 'utf8');
    res.type('text/plain').send(data);
  } catch (error) {
    const err = error as NodeJS.ErrnoException;
    if (err.code === 'ENOENT') {
      res.status(200).send('No logs available yet.');
    } else {
      console.error('Error reading log file:', error);
      res.status(500).send('Internal Server Error');
    }
  }
});

app.get('/', (req: Request, res: Response): void => {
  res.status(200).send('<h1>Hello World</h1>');
});

const PORT: number | string = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});