const express = require("express");
const {
  getProfile,
  editProfileByID,
  addDoctor,
  getAllDoctors,
} = require("../../controllers/user/profileController.js");

const {
  createUserProfile,
  getAllUsers,
  getUserByID,
  updateUserByID,
  deleteUserByID,
} = require("../../controllers/user/userController.js");
const { authenticateToken } = require("../../middlewares/authMiddleware.js");

const router = express.Router();

// Unprotected routes
router.post("/", createUserProfile);
router.post("/:id", getUserByID);

// Protected Routes that require authentication
router.post("/", authenticateToken, getAllUsers);
router.post("/:id", authenticateToken, deleteUserByID);
router.post("/:id", authenticateToken, updateUserByID);
router.get("/profile", authenticateToken, getProfile);
router.post("/profile/edit/:id", authenticateToken, editProfileByID);
router.put("/profile/edit/:id", authenticateToken, editProfileByID);

// Add Doctor route - simplify to make sure it's registered correctly
router.post("/profile/adddoctor", authenticateToken, addDoctor);

// Add a route to get all doctors from all hospitals
router.get("/doctors", authenticateToken, getAllDoctors);

// Export the router
module.exports = router;
