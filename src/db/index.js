import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER || 'shah',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'api',
    password: process.env.DB_PASS || 'mudasir',
    port: process.env.DB_PORT || 5432,
});

const getAllUsers = (req, res) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.status(200).json(results.rows);
    });
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        if (results.rows.length === 0) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.status(200).json(results.rows[0]);
    });
};

export default { getAllUsers, getUserById };
