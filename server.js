const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

app.use(express.static(__dirname + '/public')); //para que se muestre el html index

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {

    // res.send(salida); //detecta que es json y lo pasa a string
    res.render('home', {
        nombre: 'micaeLa pradO'
    });
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.listen(3000, () => { //callback
    console.log('Escuchando peticiones en el puerto 3000');
});