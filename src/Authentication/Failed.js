import React from 'react'
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './AuthenticationApp.css'

export default function Failed() {
    const history = useHistory()
  return (
    <div>
        <Card sx={{ minWidth: 500,minHeight:150,backgroundColor: '#a6a6a6' ,color: 'white' }}className="success-msg">
             <CardContent>
                 <Typography variant="h4" component="div">
                 Invalid Credentials
                 </Typography>
                 <Typography variant="body2" color="text.secondary">
                    Please check your email and password.
                </Typography>
             </CardContent>
             <CardActions className="success-msg-btn">
        <Button size="small" onClick={() =>history.push('/')} variant="outlined">Try again</Button>
      </CardActions>
         </Card>
    </div>
  )
}
