import express from 'express';
import mongoose from 'mongoose';
// import ProductRouter from './router/product.js'
import AuthRouter from './router/auth.js';
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors());
app.use('/auth',AuthRouter)
const connectDB = async()=>{
    try {
        await mongoose.connect(`mongodb://127.0.0.1:27017/productshop`)
        console.log(`Keets nối thành công`);
    } catch (error) {
        console.log(`Lỗi kết nối DB`);
    }
}
app.listen(4000,async()=>{
    await connectDB()
    console.log(`Endpoint http://localhost:4000`);
})