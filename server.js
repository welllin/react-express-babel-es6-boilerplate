import express from 'express';
import path from 'path';

let app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000);
