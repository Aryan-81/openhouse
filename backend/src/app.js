import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

app.use(express.json({ limit: '16kb' }));

app.use(express.urlencoded({
    extended: true,
    limit: '16kb'
}));

app.use(cookieParser());

// Routes

import schoolRouter from "./routes/school.routes.js";

app.use('/api/school', schoolRouter);


export { app };