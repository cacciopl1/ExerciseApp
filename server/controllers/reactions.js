/*
    controller for model comments
*/

const express = require('express');
const reactions = require('../models/reactions');

const router = express.Router();

router
    .get('/', (req, res, next) => {
        reactions.getAll().then(x=> res.send( x ))
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = +req.params.id;
        if (!id) return next();
        reactions.get(id).then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/search', (req, res, next) => {
        reactions.search(req.query.q).then(x=> res.send(x))
        .catch(next);
    })
    .post('/like', (req, res, next) => {
        reactions.addLike(
            req.body.Text, 
            req.body.Workout_id,
            req.body.Owner_id,
        ).then(newUser => {
            res.send( newUser );
        }).catch(next)
    })
    .post('/dislike', (req, res, next) => {
        reactions.addDislike(
            req.body.Text, 
            req.body.Workout_id,
            req.body.Owner_id,
        ).then(newUser => {
            res.send( newUser );
        }).catch(next)
    })
    .put('/:id', (req, res, next) => {
        reactions.update(
            req.params.id,
            req.body.Text, 
            req.body.Workout_id,
            req.body.Owner_id,
        ).then(newUser => {
            res.send( newUser );
        }).catch(next)
    })
    .delete('/:id', (req, res, next) => {
        reactions.remove(req.params.id).then(msg => {
            res.send( msg );
        }).catch(next)
    })

module.exports = router;