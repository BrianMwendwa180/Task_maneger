// createAdmin.js

const mongoose = require('mongoose');
const User = require('./models/User'); // adjust path as needed
const bcrypt = require('bcrypt');

mongoose.connect('mongodb://127.0.0.1:27017/devtaskdb') // replace with your MongoDB URI
  .then(async () => {
    const existingAdmin = await User.findOne({ email: 'admin@example.com' });
    if (existingAdmin) {
      console.log('Admin already exists');
    } else {
      const hashedPassword = await bcrypt.hash('admin@123', 10);
      const admin = new User({
        username: 'admin',
        email: 'admin@example.com',
        password: hashedPassword,
        role: 'admin'
      });
      await admin.save();
      console.log('Admin user created successfully');
    }
    mongoose.disconnect();
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });
