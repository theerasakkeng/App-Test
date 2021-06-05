import React, {useContext } from 'react'
import {AuthContext} from '../Auth/Auth.js'
import {Redirect} from 'react-router-dom'
import firebaseConfig from '../../config';

export default function Home() {
    const {currentUser} = useContext(AuthContext);
    if(!currentUser){
        return <Redirect to="/login"></Redirect>
    }
    return (
        <div style={{textAlign:'center',paddingTop:'200px'}}>
            <button onClick={()=> firebaseConfig.auth().signOut()}>logout</button>
        </div>
    )
}
