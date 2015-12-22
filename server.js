import express from 'express';

const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3000, () => console.log('App up on http://localhost:3000'));
