const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
const bcrypt = require('bcrypt');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Supabase Setup
// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseKey);

// Routes
app.get('/', (req, res) => {
  res.send('Yume Ramen API is running');
});

// Example Auth Route Sketch
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  // const salt = await bcrypt.genSalt(10);
  // const hashedPassword = await bcrypt.hash(password, salt);
  // Add Supabase insert logic here
  res.json({ message: 'Register endpoint' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});