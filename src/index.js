import dotenv from 'dotenv';
import { app } from './app.js';
import db from './db/index.js';

dotenv.config({
    path: './.env'
});

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' });
});

app.get('/users', db.getAllUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
