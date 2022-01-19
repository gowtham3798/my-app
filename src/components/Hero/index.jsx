import React from "react";
import Navbar from "../Navbar";
import {useHistory } from "react-router-dom";

import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,

} from "./HeroElements";
import { Button } from "@mui/material";

const Hero = () => {
  const history = useHistory();
  return (
    <HeroContainer>
      <Navbar />
      <HeroContent>
          
          <div className="home-page">
      <HeroBtn onClick={() => (history.push(`/customize`))}>Customize Pizza</HeroBtn>
  <HeroBtn onClick={() => (history.push(`/menu`))}>Explore our Menu</HeroBtn>
          </div>
        <HeroItems>

          <HeroH1>Greatest Pizza Ever!</HeroH1>
          <HeroP>Ready in 10 minutes</HeroP>
          <HeroBtn  onClick={() => history.push("/orders")}>Place Order</HeroBtn>
        </HeroItems>
      </HeroContent>
      
  
    </HeroContainer>
  );
};
export default Hero;
