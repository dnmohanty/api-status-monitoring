
import express, { Request, Response } from 'express';
import 'dotenv/config';

const app = express();

setInterval(async () => {
    const url = process.env.TARGET_URL;
    if (!url) return; // Prevents fetching if URL is missing
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('success:', data);
        
    } catch (error) {
        console.error('Error:', error);
    }
}, 10000);

const PORT: number | string = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req: Request, res: Response): void => {
    res.send('<h1>Hello World</h1>');
});