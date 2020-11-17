/*
    controller for model workouts
*/

const express = require('express');
const exercisetypes = require('../models/exercisetypes');

const router = express.Router();

router
    .get('/', (req, res, next) => {
        exercisetypes.getAll().then(x=> res.send( x ))
        .catch(next);
    })
    .get('/:id', (req, res, next) => {
        const id = +req.params.id;
        if (!id) return next();
        exercisetypes.get(id).then(x=> res.send( x ) )
        .catch(next);
    })
    .get('/search', (req, res, next) => {
        exercisetypes.search(req.query.q).then(x=> res.send(x))
        .catch(next);
    })
    .post('/', (req, res, next) => {
        exercisetypes.add(
            req.body.Name, 
            req.body.Type,
            req.body.Muscle_Group,
            req.body.Video_Url,
            req.body.Relative_Dificulty,
        ).then(newUser => {
            res.send( newUser );
        }).catch(next)
    })
    .put('/:id', (req, res, next) => {
        exercisetypes.update(
            req.body.Name, 
            req.body.Type,
            req.body.Muscle_Group,
            req.body.Video_Url,
            req.body.Relative_Dificulty,
        ).then(newUser => {
            res.send( newUser );
        }).catch(next)
    })
    .delete('/:id', (req, res, next) => {
        exercisetypes.remove(req.params.id).then(msg => {
            res.send( msg );
        }).catch(next)
    })

module.exports = router;