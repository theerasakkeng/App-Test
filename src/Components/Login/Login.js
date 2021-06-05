import React, { useState } from 'react'
import { Grid, Paper, Avatar, TextField, Button } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useHistory } from "react-router-dom";
import axios from 'axios';


export default function Login(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const user = JSON.stringify({ username: username, password: password })
    const res = async (e) => {
        e.preventDefault()
        const log = await axios.post('http://localhost:5000/api/login', user, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(log)
    }



    //Login Style
    const paperStyle = { padding: 20, height: '50vh', width: 300, margin: "50px auto" }
    const avatarStyle = { backgroundColor: "red" }
    const buttonStyle = { marginTop: "20px" }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle} component='form' onSubmit={res} >
                <Grid align="center">
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sing In</h2>
                </Grid>
                <TextField id="username" label="Username" placeholder="Username" type="text" fullWidth required
                    value={username}
                    onChange={e => setUsername(e.target.value)}
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
