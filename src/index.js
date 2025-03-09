import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
const app = express();

dotenv.config({
    path: './.env'
})

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

const port = process.env.PORT || 5000;

app.listen(port, (req, res)=> {
    console.log(`Server is listening on http://localhost:${port}`);
})