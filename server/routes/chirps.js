const express = require("express");
const chirpStore = require("../chirpstore");

let router = express.Router();

router.get("/:id?", (req, res) => {
    const id = req.params.id;
    if (id) {
        res.json(chirpStore.GetChirp(id));
    } else {
        res.send(chirpStore.GetChirps());
    }
});

router.post("/", (req, res) => {
    const chirp = req.body;
    chirpStore.CreateChirp(chirp);
    res.sendStatus(200);
});

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const chirp = req.body;
    chirpStore.UpdateChirp(id, chirp);   
    res.sendStatus(200);
});

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    const chirp = req.body;
    chirpStore.DeleteChirp(id, chirp);
    res.sendStatus(200);
});

module.exports = router;