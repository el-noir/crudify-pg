import pool from '../db/index.js';

export const getAllUsers = async (req, res, next) => {
    try {
        const { rows } = await pool.query('SELECT * FROM users ORDER BY id ASC');
        res.status(200).json(rows);
    } catch (error) {
        next(error);
    }
};

export const getUserById = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id]);

        if (rows.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json(rows[0]);
    } catch (error) {
        next(error);
    }
};

export const createUser = async (req, res, next) => {
    try {
        const { name, email } = req.body;
        const { rows } = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING id', [name, email]);

        res.status(201).json({ message: 'User created', id: rows[0].id });
    } catch (error) {
        next(error);
    }
};

export const updateUser = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const { name, email } = req.body;
        const { rowCount } = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id]);

        if (rowCount === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ message: `User with ID ${id} updated` });
    } catch (error) {
        next(error);
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const { rowCount } = await pool.query('DELETE FROM users WHERE id = $1', [id]);

        if (rowCount === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ message: `User with ID ${id} deleted` });
    } catch (error) {
        next(error);
    }
};
