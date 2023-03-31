import express from 'express';
import { deleteuser, getAllUsers, login, register, update } from '../contollers/userControllers.js';




const router = express.Router();

router.route('/').get(getAllUsers).post(register);
router.route('/:id').put(update).delete(deleteuser);
router.route('/login').post(login);



export default router

