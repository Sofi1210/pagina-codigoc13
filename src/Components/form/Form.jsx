import React from "react";
import { useState } from "react";
import './Form.css'

const Form = () => {
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const showAlert=(e) => {
        e.preventDefault()
        alert(`Welcome ${user}`)
        setUser("")
        setEmail("")
        setPassword("")
    }
return (
    <div>
    <div class="formulario">
        <h2>Form</h2>
        <form  onSubmit={showAlert}>
            <div className="user-box">
                <input 
                type="text" 
                required 
                value={user}
                onChange={(e) => setUser(e.target.value)} />
                <label>Username</label>
            </div>
            <div className="user-box">
                <input 
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
                <label>Email</label>
            </div>
        <div className="user-box">
            <input type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
            <label>Password</label>
        </div>
            <a href="#sign">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            <input type="submit" value="Enviar" />
            </a>
        </form>
    </div>
    </div>
        );
};

export default Form;
