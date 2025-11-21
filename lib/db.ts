import mongoose from 'mongoose';

let isConnected = false;

const connectdb = async () => {
  if (isConnected) {
    return;
  }

  try {
    const dbUrl = process.env.DB_URL;
    if (!dbUrl) throw new Error('DB_URL not defined');

    const conn = await mongoose.connect(dbUrl);

    isConnected = true;
    console.log('MongoDB connected:', conn.connection.host);
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
};

export default connectdb;
