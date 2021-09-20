// const express = require("express");
// const Event = require("../models/event");
// const router = express.Router();

// router.get("/new", (req, res) => {
//   res.render("events/new", { Event: new Event() });
// });

// router.get("/edit/:id", async (req, res) => {
//   const event = await Event.findById(req.params.id);
//   res.render("events/edit", { event: event });
// });

// router.get("/:slug", async (req, res) => {
//   const Event = await Event.findOne({ slug: req.params.slug });
//   if (Event == null) res.redirect("/");
//   res.render("Events/show", { Event: Event });
// });

// router.post(
//   "/",
//   async (req, res, next) => {
//     req.Event = new Event();
//     next();
//   },
//   saveEventAndRedirect("new")
// );

// router.put(
//   "/:id",
//   async (req, res, next) => {
//     req.Event = await Event.findById(req.params.id);
//     next();
//   },
//   saveEventAndRedirect("edit")
// );

// router.delete("/:id", async (req, res) => {
//   await Event.findByIdAndDelete(req.params.id);
//   res.redirect("/");
// });

// function saveEventAndRedirect(path) {
//   return async (req, res) => {
//     let Event = req.Event;
//     Event.title = req.body.title;
//     Event.description = req.body.description;
//     Event.location = req.body.location;
//     Event.city = req.body.city;
//     try {
//       Event = await Event.save();
//       res.redirect(`/Events/${Event.slug}`);
//     } catch (e) {
//       res.render(`Events/${path}`, { Event: Event });
//     }
//   };
// }

// module.exports = router;
