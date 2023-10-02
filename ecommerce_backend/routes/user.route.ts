import express from 'express';
import {
  createUser,
//   getUsers,
//   getUserById,
//   updateUser,
//   deleteUser,
} from '../controller/user.controller'; // Import the user controllers

const router = express.Router();

// POST request to create a new user
router.post('/createusers', createUser);

// // GET request to get all users
// router.get('/users', getUsers);

// // GET request to get a user by ID
// router.get('/users/:id', getUserById);

// // PUT request to update a user by ID
// router.put('/users/:id', updateUser);

// // DELETE request to delete a user by ID
// router.delete('/users/:id', deleteUser);

export default router;
