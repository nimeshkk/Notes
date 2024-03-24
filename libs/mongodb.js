import mongoose from 'mongoose';

const connectMongoDB = async () => {

    try {
            await mongoose.connect(process.env.MONGODB_URL);
            console.log('Connecting to MongoDB...');
        
    } catch (error) {
        console.error(error);
    
    }
}

export default connectMongoDB;