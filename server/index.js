const express = require('express');
const app = express();

//Rutes Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', express.static('static'));

app.use((req, res) => {
    res.status(404);
    res.json({success: false, message: 'Non trovato'});
});

const port = process.env.PORT || 8080;
app.listen(port,() => {
    console.log(`Server running at ${port} port...`)
})