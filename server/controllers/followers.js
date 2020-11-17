/*
    controller for model followers
*/

const express = require('express');
const followers = require('../models/followers');

const router = express.Router();

router
    .get('/', (req, res, next) => {
        followers.getAll().then(x=> res.send( x ))
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = +req.params.id;
        if (!id) return next();
        followers.get(id).then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/search', (req, res, next) => {
        followers.search(req.query.q).then(x=> res.send(x))
        .catch(next);
    })
    .post('/', (req, res, next) => {
        followers.add(
            req.body.Following_id, 
            req.body.Follower_id,
            req.body.isAccepted,
        ).then(newUser => {
            res.send( newUser );
        }).catch(next)
    })
    .put('/:id', (req, res, next) => {
        followers.update(
            req.body.Following_id, 
            req.body.Follower_id,
            req.body.isAccepted,
        ).then(newUser => {
            res.send( newUser );
        }).catch(next)
    })
    .delete('/:id', (req, res, next) => {
        followers.remove(req.params.id).then(msg => {
            res.send( msg );
        }).catch(next)
    })

module.exports = router;