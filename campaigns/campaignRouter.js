const express = require('express');
const router = require('express').Router();

const Campaign = require('./campaignModel.js');

// GET all campaigns //
router.get('/', (req, res) => {
    Campaign.list()
        .then(campaigns => {
            res.status(200).json(campaigns);
        })
        .catch(err => {
            res.status(500).json({ message: "There was an error getting the campaigns." });
        });
});


// GET campaign by id //
router.get("/:id", (req, res) => {
    let campaignId = req.params.id;
    console.log(campaignId)

    Campaign.findById(campaignId)
        .then(campaign => {
            res.status(201).json(campaign);
        })
        .catch(err => {
            res.status(401).json({ error: "User does not have any campaigns." });
        });
});


// POST a new campaign //
router.post("/", (req, res) => {
    const campaignData = req.body;

    Campaign.add(campaignData)
        .then(campaign => {
            res.status(201).json(campaign);
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to add a new campaign'});
        });
});

// GET itemized monetary donations detail for a campaign //
router.get("/donation/:id", (req, res) => {
    const id = req.params.id
    Campaign.findItemizeMonetaryDonations(id)
    .then(donation => {
        res.status(201).json(donation)
    })
    .catch(err => {
        res.status(500).json({message: "cannot Get donation"})
    })
})

// POST an itemized monetary donation for a campaign //
router.post("/donation/:id", (req, res) => {
    const id = req.params.id
    const donation = req.body
    
    Campaign.addItemizedMD(id, donation)
    .then(donation => {
        res.status(201).json(donation)
    })
    .catch(err => {
        res.status(500).json({message: "cannot created new itemized donation"})
    })
})
module.exports = router;