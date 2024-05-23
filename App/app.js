import express from 'express';
import {config} from 'dotenv';
config();
const app = express();

app.set('port', process.env.PORT || 9000)

app.use('/', (req,res) =>{
    res.json({"hola mundo":"juan"})
})

export default app;