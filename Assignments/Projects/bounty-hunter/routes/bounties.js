const express = require('express');
const bountiesRouter = express.Router();
// const uuid = require('uuid');
// const bounties = require('./bountyData.json');
const Bounty = require('../models/bountyModel');

// bountiesRouter.route('/')
//     .get((req, res) => {
//         res.status(200).send(bounties);
//     })
//     .post((req, res) => {
//         let newBounty = req.body;
//         newBounty._id = uuid();
//         bounties.push(newBounty);
//         res.status(201).send(newBounty);
//     })

// bountiesRouter.route('/:id')
//     .get((req, res) => {
//         const locateBounty = bounties.find(target => target._id === req.params.id);
//         res.send(locateBounty);
//     })
//     .put((req, res) => {
//         const modifyBounty = bounties.find(target => target._id === req.params.id);
//         for (key in req.body) {
//             modifyBounty[key] = req.body[key]
//         }
//         res.send(modifyBounty);
//     })
//     .delete((req, res) => {
//         const deleteBounty = bounties.find(target => target._id === req.params.id);
//         bounties.splice(bounties.indexOf(deleteBounty), 1);
//         console.log(bounties);
//         res.send(deleteBounty);
//     }); 

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
        newBounty.save((err, saveBounty) => {
            if(err) return res.status(500).send(err);
            return res.status(201).send(saveBounty);
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