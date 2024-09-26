

import Item from "../models/itemModel.js";


export const addItem = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const coverImage = req.file ? req.file.path : null;

    const filePath = req.file.path;
    console.log('File path:', filePath);

    const newBook = new Book({
      name,
      description,
      price,
      coverImage,
    });

    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    console.error('Error adding item:', error);
    res.status(500).json({ error: error.message });
  }
};


export const getItems = async (req,res) => {
    try{
        const items = await Item.findMany();
        res.status(201).json({books});
     }
     catch(error) {
        res.status(500).json({"error":error.message});
        console.log("Internal server error" ,error);
     }
}



export const deleteItem = async (req, res) => {
    try {
      const { id } = req.body;
      const deletedItem = await Item.findByIdAndDelete(id);
  
      if (!deletedItem) {
        return res.status(404).json({ error: 'Item not found' });
      }
  
      res.status(200).json({ message: 'Item deleted successfully' });
      
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

export const updateItem = async (req, res) => {
    try {
      const { id } = req.params;
      const { name, description,price } = req.body;
  
      const updatedItem = await Item.findByIdAndUpdate(id, { name, description,price }, { new: true });
  
      if (!updatedItem) {
        return res.status(404).json({ error: 'Item not found' });
      }
  
      res.status(200).json(updatedItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };