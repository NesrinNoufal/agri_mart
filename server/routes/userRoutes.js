import express from 'express';
import {getUsers,deleteUser} from '../controllers/userController.js'

const router = express.Router();

router.get('/getUsers', getUsers);
router.post('/deleteUserr',deleteUser);


export default router;