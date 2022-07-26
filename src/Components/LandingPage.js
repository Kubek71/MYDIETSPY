import React, { useState, useEffect } from 'react'
import { LandingPageStyled } from './Styles/LandingPageStyled'
import logo from "../logo.svg"
import { Container } from './Styles/Container'
import { Text } from './Styles/Global'
import { Box } from './Styles/Box'
import { Button } from './Styles/Global'
import { useForm } from "react-hook-form";
import { auth } from '../Helpers/FirebaseConfig'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

 
export default function LandingPage() {

    const [loginForm, setLoginForm] = useState(false);
    const [registerForm, setRegisterForm] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()


    const loginUser = (data) => {
        console.log(data);
        signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('Udalo sie zalogowac: ', user)
            window.location.replace('/')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage, ' ',  errorCode)
        });
    }


    const registerUser = (data) => {
        console.log(data)
        createUserWithEmailAndPassword(auth, data.email, data.password).then(
            (userCredentials) => {
              const user = userCredentials.user;
              console.log(user + "udalo sie zarejestrowac");
              window.location.replace('/')
            }
          );
    }

  return (
    <LandingPageStyled>
        <Container>
            <img src={logo}/>
            <h2>Let's get started</h2>
            <Box className='text-container'>
                <Text>Count calories,</Text>
                <Text>Save recipes,</Text>
                <Text>Keep a diet diary in our app!</Text>
            </Box>
            {
                loginForm === false && registerForm === false &&
                <Box className="button-container">
                    <Button type='button' onClick={()=> {
                        setLoginForm(true)
                    }}>Login</Button>
                    <Button type='button' onClick={()=> {
                        setRegisterForm(true)
                    }}>Register</Button>
                </Box>
            }

         
            {
                loginForm === true &&
                <form onSubmit={handleSubmit(loginUser)}>
                    <Box className='input-box'>
                        <input type="email" placeholder="email" {...register('email', {required: true})}></input>
                        <input type="password" placeholder="Enter password" {...register('password', {required: true})}></input>
                        <Button type="submit">LOGIN</Button>
                    </Box>
                </form>
            }

            {
                registerForm === true && 
                <form onSubmit={handleSubmit(registerUser)}>
                    <Box className='input-box'>
                        <input type="email" placeholder="email" {...register('email', {required: true})}></input>
                        <input type="password" placeholder="Enter password" {...register('password', {required: true})}></input>
                        <input type="password" placeholder="Repeat password" {...register('repeatedPassword', {required: true})}></input>
                        <Button type="submit">REGISTER</Button>
                    </Box>
                </form>
            }

            
        </Container>

    </LandingPageStyled>

  )
}
