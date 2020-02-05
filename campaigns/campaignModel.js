const db = require("../database/dbConfig.js");

module.exports = {
    list,
    findById,
    add,
    update,
    remove,
    listItemizedMD,
    findItemizeMonetaryDonations,
    addItemizedMD,
    updateItemizedMD,
    removeItemizedMD
};

function list(){
    return db('campaign')
};

function findById(campaignId){
    return db('campaign')
    .where({id: campaignId})
    .first();
};


function update(campaignId, changes){
    return db('campaign')
    .update(changes)
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

function listItemizedMD(){
    return db('itemize_monetary_donations')
};

function findItemizeMonetaryDonations(campaignId){
    return db('itemize_monetary_donations')
    .join("campaign", "campaign.id", "itemize_monetary_donations.campaignId")
    .select("itemize_monetary_donations.id","itemize_monetary_donations.campaignId", "itemize_monetary_donations.itemName", "itemize_monetary_donations.amountNeeded", "campaign.title","campaign.fundingGoals", "campaign.deadline")
    .where("campaign.id", campaignId)
}

function addItemizedMD(campaignId, donations){
    return db('itemize_monetary_donations')
    .join("campaign", "campaign.id", "itemize_monetary_donations.campaignId")
    .where("campaign.id", campaignId)
    .select("itemize_monetary_donations.id","itemize_monetary_donations.campaignId", "itemize_monetary_donations.itemName", "itemize_monetary_donations.amountNeeded", "campaign.title","campaign.fundingGoals", "campaign.deadline")
    .insert(donations)
}

function updateItemizedMD(campaignId, changes){
    return db('itemize_monetary_donations')
    .where("itemize_monetary_donations.id", campaignId)
    .select("itemize_monetary_donations.id","itemize_monetary_donations.campaignId", "itemize_monetary_donations.itemName", "itemize_monetary_donations.amountNeeded", "campaign.title","campaign.fundingGoals", "campaign.deadline")
    .update(changes)
}

function removeItemizedMD(campaignId){
    return db('itemize_monetary_donations')
    .where("itemize_monetary_donations.id", campaignId)
    .del();
}


