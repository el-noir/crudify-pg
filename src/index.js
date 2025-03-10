import dotenv from 'dotenv';
import app from './app.js';
import pool from './db/index.js';

dotenv.config({
    path: './.env'
});

const port = process.env.PORT || 5000;

app.get("/", async(req, res)=>{
    console.log("Start");
  const result = await pool.query("Select current_database()");
  console.log("end");
  res.send(`The database name is : ${result.rows[0].current_database}`)
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


//middlewares
//routes
//testing postgres connection
//error handling
//server
