import express from 'express';
import {addItem,getItems,deleteItem,updateItem}  from '../controllers/itemController.js';
import upload from '../middlewares/upload.js';

const router = express.Router();

router.post('/addItem' ,upload.single('coverImage'),addItem);
router.get('/getItems' ,getItems);
router.delete('/deleteItem' ,deleteItem);
router.put('/updateItem/:id' ,updateItem);

export default router;