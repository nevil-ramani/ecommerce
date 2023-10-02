import { Request, Response } from 'express';
import User from '../model/User.model'; // Assuming your user model is named 'User'
import UserSchema from '../validation/signup.validation';

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {

    // const { email, password, role, name, address, phoneno, resetPasswordToken } = req.body;
    // const newUser = new User({ email, password, role, name, address, phoneno, resetPasswordToken });


      // Validate request body against the schema
      const userData = UserSchema.parse(req.body);
  
      // Create a new user instance
      const newUser = new User(userData);
  
      // Save the new user to the database
      await newUser.save();
  
      // Respond with the created user
      res.status(201).json(newUser);
    } catch (error) {
      // Handle validation errors
      if (error) {;
        res.status(400).json({ error });
      } else {
        // Handle other errors (e.g., database errors)
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  };

// export const getUsers = async (_req: Request, res: Response): Promise<void> => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// export const getUserById = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const userId = req.params.id;
//     const user = await User.findById(userId);
//     if (user) {
//       res.status(200).json(user);
//     } else {
//       res.status(404).json({ error: 'User not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// export const updateUser = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const userId = req.params.id;
//     const { email, password, role, name, address, resetPasswordToken } = req.body;
//     const updatedUser = await User.findByIdAndUpdate(userId, {
//       email,
//       password,
//       role,
//       name,
//       address,
//       resetPasswordToken,
//     });
//     if (updatedUser) {
//       res.status(200).json(updatedUser);
//     } else {
//       res.status(404).json({ error: 'User not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };

// export const deleteUser = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const userId = req.params.id;
//     const deletedUser = await User.findByIdAndDelete(userId);
//     if (deletedUser) {
//       res.status(200).json(deletedUser);
//     } else {
//       res.status(404).json({ error: 'User not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// };
