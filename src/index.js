
import dotenv from 'dotenv'
import { app } from './app.js';

dotenv.config({
    path: './.env'
})

const port = process.env.PORT || 5000;

app.listen(port, (req, res)=> {
    console.log(`Server is listening on http://localhost:${port}`);
})

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })