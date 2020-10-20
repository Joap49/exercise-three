const express = require("express");

const router = express.Router();

router.get('/', (req, res) { => res.send('Routed Exercise Three');
});

module.exports = router;