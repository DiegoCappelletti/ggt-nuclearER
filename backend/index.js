import express from 'express';
import routeApp from './app.js'
import cors from 'cors';

const app = express();

//Rutes Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/api/v1', routeApp);

app.use((req, res) => {
    res.status(404);
    res.json({success: false, message: 'Non trovato'});
});

const port = process.env.PORT || 5555;
app.listen(port,() => {
    console.log(`Server running at ${port} port...`)
})