const express = require('express');
const user = require('./routes/user');
const car = require('./routes/car');

const app = express();
const port = 8000;

app.use(express.json());
app.use('/users',user);
app.use('/cars',car)


app.listen(port, () => {
    console.log(`App starting on ${port}`);
})