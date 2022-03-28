// import React from 'react';
// import './pages.css';
// import Button from '@mui/material/Button';
// import {useHistory} from "react-router-dom";

// const HomePage = () => {
//     const history = useHistory();
//     return (
//         <div className="">
//         <h1>Welcome to our app</h1>
//         <div className="form">
//         <Button variant="contained" onclick={()=>history.push('/login')}>Login</Button> 
//         <Button variant="contained" onclick={()=>history.push('/Signup')}>SignUp</Button> 
//         </div>
//         </div>
//     )
// }

import React from 'react';
import {StyledTitle,StyledSubTitle,StyledButton,ButtonGroup} from './../loginComponent/styles'

const Dashboard = () => {
    return(
        <div>
            <div></div>
            <StyledTitle  size={65}>
               welcome to our site
            </StyledTitle>
            <StyledSubTitle size={27}>
               feel free to explore
            </StyledSubTitle>
            <ButtonGroup>
            <StyledButton to='#'>Logout</StyledButton>
           
            </ButtonGroup>
        </div>
    )
}

export default Dashboard