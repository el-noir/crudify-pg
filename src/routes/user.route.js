import express from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/user.controller.js';
import validateUser from '../middlewares/input.validator.js';

const router = express.Router();

router.get('/',getAllUsers);
router.get('/:id', getUserById);
router.post('/',validateUser, createUser);
router.put('/:id',validateUser, updateUser);
router.delete('/:id', deleteUser);

export default router;
