const http = require('http');

http.createServer((req, res) => {

        res.setHeader('X-Foo', 'bar');
        res.writeHead(200, { 'Content-Type': 'application/json', 'Otro': 'header' });


        let salida = {
            nombre: 'Yomer',
            edad: 36,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        res.end();


    })
    .listen(8080);

console.log('Escuchando en el puerto 8080');