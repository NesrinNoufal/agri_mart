import  User from '../models/userModel.js'

export const getUsers = async (req, res) => {
    try {
      const users = await Author.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };


export const deleteUser = async (req, res) => {
    const author = mongoose.find({id: req.body._id}) 
  
    try {
       await author.delete();
      res.status(201).json({
        status: "User deleted successfully"
      });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };