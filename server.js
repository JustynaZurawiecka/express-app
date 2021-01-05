const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
    res.show = (name) => {
        res.sendFile(path.join(__dirname, `/views/user${name}`));
    };
    next();
});

app.get(['/','/home'], (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
  });

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/about.html'));
  });

app.get('/settings', (req, res) => {
    res.show('/settings.html');
});

app.get('/panel', (req, res) => {
    res.show('/panel.html');
});

app.use((req, res) => {
    res.sendFile(path.join(__dirname, '/public/error404.webp'));
  })

app.listen(3000, () => {
    console.log('Server is running on port: 3000');
  });
  