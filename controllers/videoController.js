const Recording = require('../models/videoModel');

exports.createVideo = async function (req, res) {
    const { data } = req.body;
    try {
      const recording = new Recording({ data });
      await recording.save();
      res.status(201).json({ message: 'Recording saved successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while saving the recording' });
    }
  };