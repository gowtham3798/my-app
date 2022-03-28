import React from 'react';
import Button from '@mui/material/Button';
import {useHistory} from "react-router-dom";
import './pages.css'

export function Submit(){
    const history = useHistory();
    return (
        <div>
            <h1>Your account was Created Successfully</h1>
            <br />
            <div className="login-btn">
            <Button variant="contained" onClick={()=>history.push('/login')}>Login</Button>
            </div>
        </div>
    )
}