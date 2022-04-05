const express =  require('express')
const router = express.Router();
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

router.get('/', (req, res) => {
    const url = 'https://api.sampleapis.com/beers/ale';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            res.render('pages/allBeers', {
                title: 'Complete Beer List',
                name: 'Beers and Ales',
                data    
            });
        })
        .catch(error => {
            console.log('Error', error);
        })
})

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const url = `https://api.sampleapis.com/beers/ale/${id}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if(Object.keys(data).length >= 1) {
                res.render('pages/singleBeers', {
                    title: data.title,
                    name: data.title,
                    data
                });
            } else {
                res.render('pages/error', {
                    title: 404,
                    name: 404,
                });
            }
        })
        .catch(error => {
            console.log('Error:', error);
        })
})

module.exports = router;