import express from 'express';
import { test, updateUser, deleteUser, getUserListings, getUser } from '../controller/user.controller.js';
import { verifyToken } from '../utills/verifyUser.js';

const router = express.Router();

router.get('/test', test);
router.post('/update/:id',verifyToken, updateUser);
router.delete('/delete/:id',verifyToken, deleteUser);
router.get('/listings/:id', verifyToken, getUserListings);
router.get('/:id', verifyToken, getUser);

export default router;