const express = require('express')
const Bounty  = require('../models/bounties')
const bountiesRouter = express.Router();

bountiesRouter.route('/')
    .get((req, res) => {
        Bounty.find((err, bounties) => {
            if (err) return res.status(500).send(err);
            res.send(bounties);
        })
    })
    .post((req, res) => {
        //turn req.body into mongoose document
        const newBounty = new Bounty(req.body);
        //save newly created doc to collection
        newBounty.save((err, savedBounty) => {
            if(err) return res.status(500).send(err);
            return res.status(201).send(savedBounty);
        })
    })

bountiesRouter.route('/:id')
    .get((req, res) => {
        //query database for doc with _id of req.params.id
        Bounty.findById(req.params.id, (err, foundBounty) => {
            if (err) return res.status(500).send(err);
            return res.send(foundBounty);
        }) 
    })
    .put((req, res) => {
        Bounty.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedBounty) => {
            if (err) return res.status(500).send(err);
            return res.status(200).send(updatedBounty);
        })
    })
    .delete((req, res) => {
        Bounty.findByIdAndRemove(req.params.id, (err) => {
            if (err) return res.status(500).send(err);
            res.status(204).send();
        })
    })

module.exports = bountiesRouter;