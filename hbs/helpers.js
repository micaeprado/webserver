const hbs = require('hbs');


//helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (text) => {
    let palabras = text.split(' ');
    palabras.forEach((palabra, pos) => {
        palabras[pos] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});