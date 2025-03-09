import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import userRoutes from './routes/user.route.js';
import errorHandler from './middlewares/error.handle.js';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN || '*',
    credentials: true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

passport.use(new LocalStrategy(
    function (username, password, done) {
        return done(null, { id: 1, username: username });
    }
));

app.use('/users', userRoutes);

app.use(errorHandler);

export default app;
