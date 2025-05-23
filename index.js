import express from "express";
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import indexRouter from './routes/index.js'
import cors from 'cors';

const __dirname = dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 4500

express()
    .use(express.json())
    .use(cors())
    //.use(express.static(path.join(__dirname, 'dist')))
    .get('/', (req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')))
    .use('/api', indexRouter)
    .listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));
