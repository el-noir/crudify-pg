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

export default pool;
