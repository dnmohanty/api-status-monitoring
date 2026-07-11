
const express = require('express');
const app = express();
require('dotenv').config();
setInterval(async() => {
    const url=process.env.TARGET_URL;
    try {
        const response=await fetch(url);
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data=await response.json();
        console.log('success:', data);
        
    } catch (error) {
        console.error('Error:', error);
        
    }
}, 10000);
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}`);
});

 app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
 });

