const express = require('express');
const router = express.Router();
router.post('/test', async (req, res) => {
    res.json({
        phone: 666
    })
})
module.exports = router