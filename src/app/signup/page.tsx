"use client";
import Link from "next/link";
import React from "react";
import  {useRouter} from "next/navigation"
import { axios } from "axios";



export default function SignupPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })
    const onSignup = async () => {

    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Signup</h1>
        <label htmlFor="username">Username</label>
            <input 
            className="p-1 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-grey-600"
            type="text"
            id="username"
            value={user.username}
            onChange={(e) => setUser({...user, username: e.target.value})}
             placeholder="username"
             />

        <label htmlFor="email">email</label>
            <input 
            className="p-1 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-grey-600"
            type="text"
            id="email"
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
             placeholder="email"
             />

<label htmlFor="password">password</label>
            <input 
            className="p-1 border border-grey-300 rounded-lg mb-4 focus:outline-none focus:border-grey-600"
            type="password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
             placeholder="password"
             />
             <button 
             onClick={onSignup}
             className="p-2 border border-grey-300 rounded-lg mb-4 focus:outline-none">
                    Signup here
             </button>
             <Link href="/login">login</Link>
        </div>
    )
}