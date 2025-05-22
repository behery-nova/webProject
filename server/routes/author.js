const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');

// Example protected route
router.get('/dashboard', protect(['author']), (req, res) => {
  res.json({ message: `Welcome Author ${req.user.id}` });
});

module.exports = router;
