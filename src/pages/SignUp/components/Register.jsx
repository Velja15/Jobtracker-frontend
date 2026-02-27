import { useState, useEffect } from "react";
import api from "../../../services/api";

function Register() {

    return(
    <div>
        <form onSubmit={handleSubmit}>
            <li><input type="text" onChange={ (e) => setName(e.target.value)}/></li>
            <li><input type="email" onChange={ (e) => setEmail(e.target.value)}/></li>
            <li><input type="password" onChange={ (e) => setPassword(e.target.value)}/></li>
            <li><button className="login-button">Register</button> <button className="gotoregister-button">Already have an account? Login here</button></li>
            
        </form>
    </div>
        
    )
}


export default Register;