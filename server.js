const express = require('express');
const app = express();
setInterval(async() => {
    const url='https://api.github.com/users/github';
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

app.listen(8000, () => {
 console.log('Server is running on port 8000');
});

 app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>');
 });

