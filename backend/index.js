const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3001;

// Enable CORS for requests from frontend
app.use(cors());

// Serve static files from the uploads directory
app.use('/uploads', express.static('uploads'));

// Multer setup for handling image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Save files with unique names
  },
});

const upload = multer({ storage });

// API route to handle image uploads
app.post('/upload', upload.single('image'), (req, res) => {
  res.json({ filePath: `/uploads/${req.file.filename}` });
});

// API route to retrieve gallery images
app.get('/gallery', (req, res) => {
  fs.readdir('uploads/', (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to scan directory' });
    }
    const filePaths = files.map((file) => `/uploads/${file}`);
    res.json({ images: filePaths });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
