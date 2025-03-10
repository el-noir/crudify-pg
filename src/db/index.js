import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    user: process.env.DB_USER || 'shah',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'api',
    password: process.env.DB_PASS || 'mudasir',
    port: process.env.DB_PORT || 5431,
});

pool.on("connect", ()=>{
    console.log(`Connection Pool established with Database`)
})

export default pool;
