const db = require("../database/dbConfig.js");

module.exports = {
    list,
    findById,
    update,
    add,
    remove,
    findItemizeMonetaryDonations,
    addItemizedMD
};

function list(){
    return db('campaign')
};

function findById(campaignId){
    return db('campaign')
    .where({id: campaignId})
    .first();
};


function update(chages, campaignId){
    return db('campaign')
    .update(chages)
    .where({id: campaignId})
};

function remove(campaignId){
    return db('campaign')
    .where({id: campaignId})
    .del()
};

function add(campaign){
    return db('campaign')
    .insert(campaign)
};

function findItemizeMonetaryDonations(campaignId){
    return db('itemize_monetary_donations')
    .join("campaign", "campaign.id", "itemize_monetary_donations.campaignId")
    .where("campaign.id", campaignId)
}

function addItemizedMD(campaignId, donations){
    return db('itemize_monetary_donations')
    .join("campaign", "campaign.id", "itemize_monetary_donations.campaignId")
    .where("campaign.id", campaignId)
    .insert(donations)
}

