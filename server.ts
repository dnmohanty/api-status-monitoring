import express, { type Request, type Response } from 'express';
import 'dotenv/config';
import cors from 'cors';
import { MongoClient } from 'mongodb';

const app = express();
app.use(cors());

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017';
const client = new MongoClient(mongoUri);
const dbName = 'api-monitor';

let dbInitialized = false;

async function initDb() {
  try {
    await client.connect();
    console.log('Database connected');
    dbInitialized = true;
  } catch (error) {
    console.error(error);
    dbInitialized = false;
  }
}
initDb();

async function checkTargetUrl(): Promise<void> {
  if (!dbInitialized) return;
  const url = process.env.TARGET_URL || 'https://typicode.com';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: unknown = await response.json();
    const db = client.db(dbName);
    await db.collection('success_logs').insertOne({
      timestamp: new Date().toISOString(),
      data: data
    });
  } catch (error) {
    if (!dbInitialized) return;
    try {
      const errorMessage = error instanceof Error ? error.message : String(error);
      const db = client.db(dbName);
      await db.collection('error_logs').insertOne({
        timestamp: new Date().toISOString(),
        error: errorMessage
      });
    } catch (e) {
      console.error(e);
    }
  }
}

setInterval(checkTargetUrl, 10000);

app.get('/api/history', async (req: Request, res: Response): Promise<void> => {
  if (!dbInitialized) {
    res.status(500).json({ error: 'Database not connected' });
    return;
  }
  try {
    const db = client.db(dbName);
    const logs = await db.collection('success_logs')
      .find()
      .sort({ _id: -1 })
      .limit(100)
      .toArray();
    
    const formattedLogs = logs.reverse().map(log => ({
      timestamp: log.timestamp,
      data: log.data
    }));

    res.status(200).json(formattedLogs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/', (req: Request, res: Response): void => {
  res.status(200).send('<h1>Autonomous Monitor Backend Online</h1>');
});

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8000;
app.listen(PORT, () => {});