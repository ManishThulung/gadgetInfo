const express = require("express");
const { check } = require("express-validator");

const phoneControllers = require("../controllers/phone-controllers");
const { auth, authorizeRoles, combineRoles } = require("../middleware/auth");

const router = express.Router();

router.get("/", phoneControllers.getAllPhone);

router.get("/:pid", phoneControllers.getPhoneById);

// router.post(
//   '/',
//   [
//     check('title')
//       .not()
//       .isEmpty(),
//     check('description').isLength({ min: 5 }),
//     check('address')
//       .not()
//       .isEmpty()
//   ],
//   placesControllers.createPlace
// );

router.get(
  "/admin/phones/",
  auth,
  authorizeRoles(["admin", "content_creator"]),
  phoneControllers.getAdminPhone
);

router.post(
  "/admin/phone/new",
  auth,
  authorizeRoles(["admin", "content_creator"]),
  phoneControllers.createPhone
);

router.put(
  "/admin/phone/:pid",
  auth,
  authorizeRoles(["admin", "content_creator"]),
  phoneControllers.updatePhone
);

router.delete(
  "/admin/phone/:pid",
  auth,
  authorizeRoles(["admin", "content_creator"]),
  phoneControllers.deletePhone
);

module.exports = router;
