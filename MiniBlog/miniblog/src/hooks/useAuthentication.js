import { db } from "../firebase/config"

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
  } from "firebase/auth";

import {useState, useEffect} from 'react'

export const useAuthentication = ()=>{
    
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(null)

    //cleanUp
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled(){
        if(cancelled){
            return;
        }
    }

    const createUser = async (data) =>{
        checkIfIsCancelled()
        setLoading(true)
        setError(null);

        try {
            
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
                
            await updateProfile(user,{
                displayName: data.displayName
            });
            setLoading(false)

            return user

        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message);
            
            let systemErrorMessage

            if(error.message.includes("Password")){
                systemErrorMessage = "Password is so weak"
            }
            else if(error.message.includes("email-already")){
                systemErrorMessage = "this email already exists"
            } else{
                systemErrorMessage = "there was an unexpected error"
            }
            setError(systemErrorMessage)
            setLoading(false)
        }
    };

    const logout = ()=> {
        checkIfIsCancelled()

        signOut(auth)
    };

    //Login
    const login = async(data) =>{
        checkIfIsCancelled();
        setLoading(true)
        setError(false)

        try {
            await signInWithEmailAndPassword(auth,data.email,data.password);
            setLoading(false)
        } catch (error) {
            let systemErrorMessage;
            if(error.message.includes("user-not-found")){
                systemErrorMessage = "User not found try again";
            }
            else if(error.message.includes("wrong-password")){
                systemErrorMessage = "Wrong Password try again"
            }
            else{
                systemErrorMessage = "unexpected error has been detected try again"
            }

            setError(systemErrorMessage)
            setLoading(false)
        }

    }

    useEffect(()=>{
        return ()=> setCancelled(true);
    },[])

    return{
        auth,
        createUser,
        error,
        loading,
        logout,
        login,
    }
}