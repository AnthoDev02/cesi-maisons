import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../Header/Header";
import { signIn } from "../../Repositories/Authentification";
import "./Authentication.css"

const Authentication = () => {
    const navigate = useNavigate();

    const initForm = {
        Email: "",
        Password: ""
    }

    const initValidateForm ={
        isValidEmail : false,
        isValidPassword : false
    }
    
    const [form, setForm] = useState(initForm);
    const [validateForm , setValidateForm] = useState(initValidateForm)
    const [isAuthenticationError , setIsAuthenticationError] = useState(false)
    
    const handleOnChangeEmail = (event) => {
        setForm({...form, Email: event.target.value})
        const regexMail = new RegExp(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
        setValidateForm({...validateForm , isValidEmail: regexMail.test(event.target.value)});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        signIn(form).then((response) => {
            if(response.data){
                navigate("/dashboard");
            }
            else {
                setIsAuthenticationError(true)
            }
        });
    }

    return (
        <>
            <Header title="AUTHENTIFICATION" />
            <form>
            <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" onChange={handleOnChangeEmail}/>
                {!validateForm.isValidEmail && form.Email.length > 0 && <p className="invalidEmail">* Email invalide</p>}
            </div>
            <div className="mb-3">
                <input type="password" className="form-control" placeholder="Password" onChange={(event) => setForm({...form, Password: event.target.value})}/>
            </div>
            <button type="button" onClick={handleSubmit} className="btn">CONNEXION</button>
            {isAuthenticationError && 
                <p>Le mail ou le MDP est incorrect</p>
            }
            </form>
        </>
    )
}

export default Authentication;