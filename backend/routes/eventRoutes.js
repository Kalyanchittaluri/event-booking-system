const express = require("express");
const Event = require("../models/Event");
const Booking = require("../models/Booking");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Get all events (public)
router.get("/", async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

// Add event (only Admin can)
router.post("/", auth(), async (req, res) => {
  if (req.user.email !== "admin@email.com") {
    return res.status(403).json({ msg: "Only Admin can add events" });
  }

  try {
    await new Event(req.body).save();
    res.json({ msg: "Event added successfully" });
  } catch (error) {
    res.status(500).json({ msg: "Error adding event" });
  }
});

// Book an event (any logged-in user)
router.post("/book/:id", auth(), async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) return res.status(404).json({ msg: "Event not found" });

  if (event.availableSeats <= 0) {
    return res.status(400).json({ msg: "No seats left" });
  }

  // Reduce seat count
  event.availableSeats -= 1;
  await event.save();

  // Save booking record
  await Booking.create({
    userId: req.user.id,
    eventId: event._id
  });

  res.json({ msg: "Booking confirmed" });
});

// Get logged-in user's bookings
router.get("/my", auth(), async (req, res) => {
  const bookings = await Booking.find({ userId: req.user.id })
    .populate("eventId");

  res.json(bookings);
});

module.exports = router;
