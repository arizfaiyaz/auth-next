import { error } from "console";
import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!,)
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("Connected to the database");
        });

        connection.on('error', () => {
            console.log("Error connecting to the database");
        })

    } catch {
        console.log("Something went wrong!!! with db");
        console.log(error);
        
    }
}