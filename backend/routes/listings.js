const express = require("express");
const router = express.Router();

const verifyToken = require("../middleware/verifyToken");

const { getListings, createListing } = require("../controllers/listings");

router.get("/", getListings);

router.use(verifyToken);
router.post("/", createListing);

module.exports = router;
