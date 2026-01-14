require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');

const createAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to MongoDB');

        const adminEmail = 'support@sirahdigital.in';
        const adminPassword = 'Happykid04'; // Updated password

        const userExists = await User.findOne({ email: adminEmail });

        if (userExists) {
            userExists.role = 'admin';
            await userExists.save();
            console.log('User updated to admin');
        } else {
            await User.create({
                name: 'Sirah Admin',
                email: adminEmail,
                password: adminPassword,
                role: 'admin'
            });
            console.log('Admin user created successfully');
        }

        process.exit();
    } catch (error) {
        console.error('Error creating admin:', error.message);
        process.exit(1);
    }
};

createAdmin();
