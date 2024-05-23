import express from 'express';
import {config} from 'dotenv';
import rout from './routes/index.js';
config();

const app = express();

app.set('port', process.env.PORT || 9000)

app.use('/', rout);

export default app;