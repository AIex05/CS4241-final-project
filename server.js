const express = require('express');
const client = require('./config/MongodbSetup');
const app = express();

app.set('view engine', 'ejs');
// app.use()

app.get('/', (req, res) => {
    res.send('you have reached /')
})

const PORT = process.env.PORT|| 3000
app.listen(PORT, () => {console.log(`Now listening port: ${PORT}`)})