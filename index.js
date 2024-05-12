const express = require('express');
const path = require('path');
const app = express();
const port = 8000;


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.render('index.ejs');
})
app.get("/info", (req, res) => {
    res.send("CHECK");
})
app.listen(port, () => {
    console.log(`example app listeing on port ${port}`);
})