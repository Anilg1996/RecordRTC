const express = require('express');

const router = express.Router();
const { createVideo } = require("../controllers/videoController");
router.post("/createvideo", createVideo);
