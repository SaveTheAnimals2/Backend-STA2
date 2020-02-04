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

// UPDATE edit an existing campaign // 
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    Campaign.update(id, changes)
    .then(campaign => {
      if (campaign) {
        res.status(200).json(campaign);
      } else {
        res.status(404).json({ message: 'The campaign could not be found' });
      }
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({
        message: 'Error updating the campaign',
      });
    });
})

// DELETE an existing campaign //
router.delete('/:id', (req, res) => {
    Campaign.remove(req.params.id)
      .then(campaign => {
        if (campaign > 0) {
          res.status(200).json({ message: 'The campaign has been deleted' });
        } else {
          res.status(404).json({ message: 'The project could not be found' });
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          message: 'Error removing the campaign',
        });
      });
  });


/////////////// MONETARY DONATIONS/////////////////////////
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

// UPDATE an itemized monetary donation //
router.put("/donation/:id", (req, res) => {
    const id = req.params.id
    const donation = req.body
    
    Campaign.updateItemizedMD(id, donation)
    .then(donation => {
        res.status(201).json(donation)
    })
    .catch(err => {
        res.status(500).json({message: "cannot update new itemized donation"})
    })
})


// DELETE an itemized monetary donation //
router.delete("/donation/:id", (req, res) => {
    const id = req.params.id
    
    Campaign.removeItemizedMD(id)
    .then(donation => {
        res.status(201).json(donation)
    })
    .catch(err => {
        res.status(500).json({message: "cannot delete itemized donation"})
    })
})
module.exports = router;