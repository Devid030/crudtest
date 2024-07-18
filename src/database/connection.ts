import mongoose from "mongoose";
import configs from '@/src/config'

console.log('========Configs==========')
console.log(configs)
console.log('========Configs==========')

export async function connectMongoDB() {
    try {
        await mongoose.connect(
            configs.mongodbUrl
        );
        console.log("Connect to MongoDB successfully!");
    } catch (error: any) {
        console.log("Error Conection to MongoDB", error)
    }
}