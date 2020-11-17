/*
    controller for model emojis
*/

const express = require('express');
const emojis = require('../models/emojis');

const router = express.Router();

router
    .get('/', (req, res, next) => {
        emojis.getAll().then(x=> res.send( x ))
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = +req.params.id;
        if (!id) return next();
        emojis.get(id).then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/search', (req, res, next) => {
        emojis.search(req.query.q).then(x=> res.send(x))
        .catch(next);
    })
    .post('/', (req, res, next) => {
        emojis.add(
            req.body.Name, 
            req.body.Description,
            req.body.Code,
            req.body.Type_id,
        ).then(newUser => {
            res.send( newUser );
        }).catch(next)
    })
    .put('/:id', (req, res, next) => {
        emojis.update(
            req.body.Name, 
            req.body.Description,
            req.body.Code,
            req.body.Type_id,
        ).then(newUser => {
            res.send( newUser );
        }).catch(next)
    })
    .delete('/:id', (req, res, next) => {
        emojis.remove(req.params.id).then(msg => {
            res.send( msg );
        }).catch(next)
    })

module.exports = router;