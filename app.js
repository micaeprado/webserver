const http = require('http');

http.createServer((require, resp) => {

        resp.writeHead(200, { 'Content-type': 'application/json' });

        let salida = {
            nombre: 'Micaela',
            edad: 24,
            url: require.url
        }
        resp.write(JSON.stringify(salida));
        // resp.write('Hola mundo');
        resp.end();
    })
    .listen(8080);

console.log('Escuchando puerto 8080');