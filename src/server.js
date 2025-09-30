// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware: đọc JSON body
app.use(express.json());

// Dữ liệu tạm thời (thường sẽ dùng database)
let users = [
    { id: 1, name: 'Hung' },
    { id: 2, name: 'An' },
];

// ---------------------- ROUTES ----------------------

// Route thử nghiệm
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// GET /users - lấy danh sách người dùng
app.get('/users', (req, res) => {
    res.json(users);
});

// GET /users/:id - lấy 1 người dùng theo id
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
});

// POST /users - thêm người dùng mới
app.post('/users', (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: 'Name is required' });
    }

    const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        name
    };

    users.push(newUser);

    res.status(201).json({ message: 'User added!', user: newUser });
});

// PUT /users/:id - cập nhật người dùng
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const { name } = req.body;

    const user = users.find(u => u.id === userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    if (!name) {
        return res.status(400).json({ message: 'Name is required' });
    }

    user.name = name;
    res.json({ message: 'User updated!', user });
});

// DELETE /users/:id - xóa người dùng
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === userId);

    if (index === -1) {
        return res.status(404).json({ message: 'User not found' });
    }

    const deletedUser = users.splice(index, 1);
    res.json({ message: 'User deleted!', user: deletedUser[0] });
});

// ---------------------- START SERVER ----------------------
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
