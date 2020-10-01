const express = require('express');
const app = express();

const hbs = require('hbs');

require('./hbs/helpers')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'yomer sMITh rodriguez duran'
    });

});
app.get('/about', (req, res) => {

    res.render('about');

});


/* app.get('/', (req, res) => {
    // res.send('Hola Mundo');
    let salida = {
        nombre: 'Yomer',
        edad: 36,
        url: req.url
    }
    res.send(salida);

});
app.get('/data', (req, res) => {
    res.send('Hola Data');


}); */

app.listen(port, () => {
    console.log(`escuchando petiicones en el puerto: ${port}`);

});