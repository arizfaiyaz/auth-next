import {connect} from "@/dbconfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import bcryptjs from "bcryptjs";


connect();

export async function POST(request: NextRequest) {
    try {
       const reqBody = await request.json()
       const {username, email, password} = reqBody
       console.log(reqBody);

       //check if user already exists
       const user = await User.findOne({email})
       if(user) {
        return NextRequest.json({error: "User already exists"}, {status: 400});
       }

       // hash password
       const salt = await bcrypt.genSalt(10);
       const hashedPassword = await bcryptjs.hash(password, salt);

       const newUser = new User ({
        username,
        email,
        password: hashedPassword
       })
       const savedUser = await newUser.save();
       console.log(savedUser);

       return NextResponse.json({
        message: "User created successfully",
        success: true,
        savedUser
    })
       
    } catch (error: any) {
        return NextResponse.json({error: error.message},
        {status: 500});
    }
}