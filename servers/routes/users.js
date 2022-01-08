import express from 'express';
import {signIn, signUp, updateVal, resetVal, getVal } from '../controllers/user.js';

const router = express.Router();

router.post('/signin', signIn);
router.post('/signup', signUp);
router.patch('/:id', updateVal);
router.delete('/:id', resetVal);
router.get('/:id', getVal);

export default router;