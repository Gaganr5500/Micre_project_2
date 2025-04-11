// itemRoutes.js
import express from 'express';
const router = express.Router();

// Define the POST /users route
router.post('/users', (req, res) => {
  const { name, email } = req.body;
  // Here, you can add logic to save the user to the database
  res.status(201).json({ message: `User ${name} with email ${email} created successfully.` });
});

export default router;
