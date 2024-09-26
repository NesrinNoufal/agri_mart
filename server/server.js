import express from 'express'
import itemRoutes from './routes/itemRoutes.js'
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors';
import connectToMongoDB from './db/connectToMongodb.js';
import multer from 'multer'
import {fileURLToPath} from 'url';
import path from 'path';
import fs from 'fs'

const app = express()

const PORT = 5000;

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

 app.use('/api/books/upload', express.static(path.join(__dirname, 'upload')));


app.use(cors());


const uploadDirectory = path.join(__dirname, 'upload');

if (!fs.existsSync(uploadDirectory))   
 {
  console.log('Upload directory does not exist. Creating it...');
  fs.mkdirSync(uploadDirectory); // Create the directory if it doesn't exist
}


app.use('/api/auth',authRoutes)
app.use('/api/items',itemRoutes)
app.use('/api/user',userRoutes)

app.listen(PORT, () => {
    connectToMongoDB()
    console.log(`server running at port ${PORT}`);
})



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now()   
   + '-' + file.originalname);
    }
  });

  const upload = multer({ storage });
  
  app.post('/api/items/upload', upload.single('coverImage'), async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const coverImage = req.file ? req.file.path : null;

        if (coverImage) { // Check if file exists before accessing path
            const filePath = path.join(__dirname, 'upload', req.file.filename);
            console.log('File path:', filePath);
          }
    
        const filePath = req.file.path;
        console.log('File path:', filePath);
    
        const newBook = new Book({
          name,
          description,
          price,
          author,
          language,
          publishedYear,
          coverImage,
        });
    
        await newBook.save();
        res.status(201).json(newBook);
      } catch (error) {
        console.error('Error adding book:', error);
        res.status(500).json({ error: error.message });
      }
  });