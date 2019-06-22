const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid');
const PORT = 7777;

const app = express();
app.use(bodyParser.json());
//new middleware
app.use(middleware);
app.use(authenticate);

const heroes = [];

app.route('/heroes')
    .get((req, res) => {
        res.send(heroes.filter(hero => {
            for (key in req.query) {
                if (String(hero[key].toLowerCase() !== req.query[key].toLowerCase()) {
                    return false;
                }
            }
            return true;
        }))
    })
    .post((req, res) => {
        let newHero = req.body;
        newHero._id = uuid();
        heroes.push(newHero);
        res.send(newHero);
    })

app.route('/heroes/:id/')
    .get((req, res) => {
        const locateHeroes = heroes.find(target => target._id === req.params.id);
        res.send(locateHeroes);
    })
    .put((req, res) => {
        const modifyHeroes = heroes.find(target => target._id === req.params.id);
        for (let key in req.body) {
            modifyHeroes[key] = req.body[key]
        }
        res.send(modifyHeroes);
    })

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
