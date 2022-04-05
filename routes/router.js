const express = require('express');
const router = express.Router();
const fetch = (...args) => import('node-fetch').then(({default:fetch}) => fetch(...args));
router.use(express.static('public'));

const beerRoutes = require('./api/beerRoutes');

router.use('/allBeers', beerRoutes);

router.use('/', (req, res) => {
    const url = 'https://api.sampleapis.com/beers/ale';
    fetch (url)
        .then(res => res.json())
        .then(data => {
            res.render('pages/home', {
                title: 'Delicious elixirs',
                name: 'Beers and Ales',
                data
            });
        })
        .catch(error => {
            console.log('Error', error)
        });
});

router.get('*', (req, res) => {
    if(req.url == '/favico/ico') {
        res.end();
    } else {
        res.render('pages/error', {
            title: 404,
            name: 404,
        })
    }
})

module.exports = router;