Introduction

This repository contains the back-end and all associated server files for Save The Animals application.

DATA SCHEMA (DATA STRUCTURES)

Users (Organization):

{
  "id": 1,                // Integer (primary key provided by server and automatic increments)
  "username": "",         // String, required
  "password": "",         // String, required
  "organizationName": "", // String, required
  "email": ""             // String, required
}


Users (Supporter):

{
  "id": 1,                // Integer (primary key provided by server and automatic increments)
  "username": "",         // String, required
  "password": "",         // String, required
  "email": ""             // String, required
}


Campaigns:

{
  "id": 1,                // Integer (primary key provided by server and automatic increments)
  "title": "",            // String, required
  "location": "",         // String, required
  "description": "",      // String, required
  "species": "",          // String, required
  "urgencyLevel": "",     // String, required
  "deadline": "",         // String, required
 }
 
 Itemized Monetary Donations:
 
 {
  "id": 1,                // Integer (primary key provided by server and automatic increments)
  "campaignId": "",       // Integer, required (foreign key reference to "campaign" table)
  "itemName": "",         // String, required
  "amountNeeded": ""      // String, required
}


SUMMARY TABLE OF API ENDPOINTS

Table           Method          Endpoint                 Description
auth            POST            /api/auth/register       Will create a new organization profile using the information sent                                                              inside the body of the request and returns a JSON Web Token.
auth            POST            /api/auth/login          Uses the credentials sent inside the body to authenticate the user. 




