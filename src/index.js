import express from 'express'
import dotenv from 'dotenv'
const app = express();

dotenv.config({
    path: './.env'
})

const port = process.env.PORT || 5000;

app.listen(port, (req, res)=> {
    console.log(`Server is listening on http://localhost:${port}`);
})