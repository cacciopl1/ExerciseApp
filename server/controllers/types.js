/*
    controller for model types
*/

const express = require('express');
const types = require('../models/types');

const router = express.Router();

router
    .get('/', (req, res, next) => {
        types.getAll().then(x=> res.send( x ))
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = +req.params.id;
        if (!id) return next();
        types.get(id).then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/search', (req, res, next) => {
        types.search(req.query.q).then(x=> res.send(x))
        .catch(next);
    })
    .post('/', (req, res, next) => {
        types.add(
            req.body.Name, 
            req.body.Type_id,
        ).then(newUser => {
            res.send( newUser );
        }).catch(next)
    })
    .put('/:id', (req, res, next) => {
        types.update(
            req.body.Name, 
            req.body.Type_id,
        ).then(newUser => {
            res.send( newUser );
        }).catch(next)
    })
    .delete('/:id', (req, res, next) => {
        types.remove(req.params.id).then(msg => {
            res.send( msg );
        }).catch(next)
    })

module.exports = router;