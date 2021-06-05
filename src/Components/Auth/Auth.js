import React,{useState,useEffect,createContext} from 'react';
import firebaseConfig from '../../config';

export const AuthContext = createContext();

export const AuthProvider = ({children})=> {
    //const [loading,setLoading] = useState(true);
    const [currentUser,setCurrentuser] = useState(null);

    useEffect(()=>{
        firebaseConfig.auth().onAuthStateChanged((user) => {
            setCurrentuser(user);
            //setLoading(false);
        })
    },[]);
    {/*if(loading){
        return <p>loading...</p>
    */}
    return(
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}
