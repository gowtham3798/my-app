import React from 'react';
import {StyledTitle,StyledSubTitle,StyledButton,ButtonGroup} from './../loginComponent/styles'

const Home = () => {
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
            <StyledButton to='/login'>Login</StyledButton>
            <StyledButton to='/signup'>SignUp</StyledButton>
            </ButtonGroup>
        </div>
    )
}

export default Home