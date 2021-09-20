const express = require("express");
const event = require("../models/Event");
const router = express.Router();

// GET all
router.get("/", async (req, res) => {
  const events = await event.find();
  try {
    return res.status(200).json(events);
  } catch (error) {
    return res.status(500).json({ message: "Error couldn't get the prodcuts" });
  }
});

// GET Singleevent
router.get("/event/:id", async (req, res) => {
  const { id } = req.params;
  const singleevent = await event
    .findById(id)
    .populate("title", "city", "location", "details", "host", "date");
  try {
    return res.status(200).json(singleevent);
  } catch (error) {
    return res.status(500).json({ message: "Couldn't not get the event" });
  }
});

// POST event
router.post("/event", async (req, res) => {
  const eventToCreate = await event.create(req.body);
  try {
    return res.status(201).json(eventToCreate);
  } catch (error) {
    return res.status(500).json({ message: "Could not create the event" });
  }
});

// POST imageUpload
router.post("/event/imageUpload/:id", async (req, res) => {
  const { id } = req.params;
  const eventToUpdate = await event.findById(id);
});

// PUT event
router.put("/event/:id", async (req, res) => {
  const { id } = req.params;
  const eventToUpdate = await event.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(eventToUpdate);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Couldn't update event, check the server" });
  }
});

// DELETE event
router.delete("/event/:id", async (req, res) => {
  const { id } = req.params;
  await event.findByIdAndDelete(id);
  try {
    return res.json({ message: "event successfully deleted" });
  } catch (error) {
    return res.status(500).json({ message: "ERROR could not delete event" });
  }
});

module.exports = router;
