const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send("Welcome to Hello World API - Created By Rahul Sah");
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
            greeting = "Welcome to Hello World API ";
    }
    res.send(greeting);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
