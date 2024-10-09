const express = require('express');
const router = express.Router();

router.get('', (req, res) => {
    const locals ={
        title: "Nodejs bolog",
        description: "simple blog using nodejs mongodb and epress"
    }
    res.render('index', { locals });
});

router.get('/about', (req, res) => {
    res.render('about');
});

module.exports = router;