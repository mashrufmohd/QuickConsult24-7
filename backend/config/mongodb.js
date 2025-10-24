import mongoose from "mongoose";

const connectDB = async () => {
    try {
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI is not defined in environment variables');
        }

        mongoose.connection.on('connected', () => console.log("Database Connected"))
        await mongoose.connect(process.env.MONGODB_URI + '/quickconsult')
    } catch (error) {
        console.error('MongoDB Connection Error:', error.message);
        process.exit(1);
    }
}

export default connectDB;

// Do not use '@' symbol in your databse user's password else it will show an error.