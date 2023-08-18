const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const path = require('path'); 

app.use(cors());

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/hello', (req, res) => {
    const language = req.query.language;

    let greeting;
    switch(language) {
        case 'English':
            greeting = "Hello world";
            break;
        case 'French':
            greeting = "Bonjour le monde";
            break;
        case 'Hindi':
            greeting = "Namastey sansar";
            break;
        default:
            greeting = "Welcome to the HELLO WORLD API created by Rahul Kumar Sah";
    }
    res.send(greeting);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});