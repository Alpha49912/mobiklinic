const express = require('express'),
    server = express();
const path = require('path');
const PORT = process.env.PORT || 8080;



server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, 'public')));



server.get('/', (req, res) => {
    res.sendFile('/index.html', { root: __dirname });
});

server.get('/about', (req, res) => {
    res.sendFile('/about.html', {
        root: __dirname
    });
});

server.get('/contact', (req, res) => { res.sendFile('/contact.html', { root: __dirname }); });
server.get('/partner', (req, res) => {
    res.sendFile('/partners.html', {
        root: __dirname
    });
});

server.listen(PORT, () => {
    console.log(`Express server started at port ${PORT}`);
});