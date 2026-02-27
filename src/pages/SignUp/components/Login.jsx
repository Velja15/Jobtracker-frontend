import { useState, useEffect } from "react";
import api from "../../../services/api";

function Login() {
    const [email , setEmail]= useState("");
    const [password , setPassword]= useState("");


    const handleSubmit = async (email) => {

        const response = await api.get(`/users`)
        const data = response.data

        if(!response.ok)
        {
            alert("Neuspesan login")
        }

        
        
    }


  

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <li><input type="email" onChange={ (e) => setEmail(e.target.value)}/></li>
                <li><input type="password" onChange={ (e) => setPassword(e.target.value)}/></li>
                <li><button className="login-button">Login</button> <button className="gotoregister-button">Don't have an account? Register here</button></li>
            
            </form>
        </div>
    )
}