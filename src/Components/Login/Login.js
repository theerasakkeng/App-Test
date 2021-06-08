import React, { useState, useContext } from 'react'
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import {AuthContext} from '../Auth/AuthContext.js'

export default function Login() {
    const {currentUser,setCurrentuser} = useContext(AuthContext);
    const history = useHistory();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const loginSubmit = async (e) => {
        e.preventDefault();
        const user = { email, password };
        const response = await axios.post('http://localhost:8000/auth/login', user);
        setCurrentuser(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
    }; 

    if(currentUser) {
        history.push("/dashboard")
    }

    {/*const user = JSON.stringify({ email: email, password: password })
    const res = async (e) => {
        e.preventDefault()
        const login = await axios.post('http://localhost:8000/auth/login', user, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(login)
    */}



    //Login Style
    const paperStyle = { padding: 20, height: '50vh', width: 300, margin: "50px auto" }
    const avatarStyle = { backgroundColor: "red" }
    const buttonStyle = { marginTop: "20px" }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle} component='form' onSubmit={loginSubmit} >
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sing In</h2>
                </Grid>
                <TextField id="username" label="Username" placeholder="Username" type="text" fullWidth required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField id="password" label="Password" v placeholder="Password" type="password" fullWidth required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                {/*error && <Grid className="error">{error}</Grid>*/}
                <Button style={buttonStyle} type="submit" color="primary" variant="contained" fullWidth >Sing In</Button>
            </Paper>
        </Grid>
    )
}
