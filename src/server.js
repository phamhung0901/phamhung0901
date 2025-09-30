const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware để đọc JSON body
app.use(express.json());

// Route thử nghiệm
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// API đơn giản: GET users
app.get('/users', (req, res) => {
    const users = [
        { id: 1, name: 'Hung' },
        { id: 2, name: 'An' },
    ];
    res.json(users);
});

// API POST đơn giản
app.post('/users', (req, res) => {
    const newUser = req.body; // { id: 3, name: "Mai" }
    res.json({ message: 'User added!', user: newUser });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
