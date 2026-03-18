import { Box, Button, Typography } from "@mui/material";
import React from "react";
import './intro.css'
import { RiArrowDropDownLine } from "react-icons/ri";


export default function Intro(params) {
    return(
        <>
<Box sx={{width:{xs:'80%',sm:'80%',md:'80%',lg:'80%'},height:'auto',margin:{xs:'100px auto',sm:'none',md:'100px auto',lg:'150px auto'},display:'flex',flexDirection:{xs:'column',sm:'column',md:'row',lg:'row '},border:'1px solid white !important',overflowX:'hidden',
gap:'80px',padding:'20px',alignItems:{xs:'left',sm:'center',md:"left",lg:'center'}
}}>
 <Box sx={{width:{xs:'80%',sm:'80%',md:"100%",lg:'70%'},height:'100%',display:'flex',flexDirection:'column',gap:'20px'}}>
<Typography className="parap" sx={{color:'var(--color)',fontSize:{xs:'20px',sm:'20px',md:"22px",lg:'30px'},fontFamily:'sans-serif'}}>Hi there, I'm  <span className="friends" style={{color: 'var(--color1)',fontWeight:'bold',fontFamily:'cursive'}}> Isha Raheel</span></Typography>
<Typography sx={{color:'var(--color)',fontSize:{xs:'13px',sm:'14px',md:'15px',lg:"23px"},fontFamily:'serif'}}>Passionate Full-Stack Web Developer based in Faisalabad.
Building modern, responsive, and user-focused websites with HTML, CSS, Bootstrap, and JavaScript.</Typography>
</Box>
<Box sx={{width:'auto',height:'100%'}}>
  <img src="./images/title1.png" alt="title" style={{width:'300px'}}/>
</Box>
</Box>
        
        
        
        
        </>
    )
}