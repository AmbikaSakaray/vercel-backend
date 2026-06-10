//const express = require("express");

//const router = express.Router();

// 
const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

router.post("/save/contact", async (req, res) => {

  try {

    const contact = new Contact(req.body);

    await contact.save();

    res.status(200).json({
      message: "Contact Saved Successfully"
    });

  }
  catch(error){

    console.log(error);

    res.status(500).json({
      message: "Error Saving Contact"
    });

  }

});

router.get("/messages", async (req, res) => {

  try {

    const messages =
      await Contact.find();

    res.status(200).json(messages);

  }
  catch(error){

    console.log(error);

    res.status(500).json({
      message: "Error Fetching Messages"
    });

  }

});

module.exports = router;