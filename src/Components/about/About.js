import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import '../Navbar/navbar.css'

export default function About(params) {
    return(
        <>
<Box sx={{width:{xs:'auto',sm:'90%',md:'80%',lg:'80%'},height:"auto",margin:"250px auto"}}>
 <Box sx={{width:'100%',height:'auto',display:'flex',flexDirection:{xs:'column',sm:'column',md:'row',lg:"row"},alignItems:'center',justifyContent:'space-between',gap:{xs:'30px',sm:"30px",md:"30px",lg:'0px'}}}>
    <Box component='img' src="./images/avatar.png" alt="user" sx={{width:{xs:'90%',sm:'90%',md:'40%',lg:'40%'},height:'600px',marginBottom:'30px',borderRadius:'30%',transitionDuration:'0.5s', '&:hover': {
      borderRadius: '30px'
    }}}>

</Box>
<Box sx={{width:{xs:'90%',sm:'auto',md:'auto',lg:'53%'},height:'auto',}}>
     <Typography className='project' sx={{color:'var(--color1)',fontSize:'25px',textAlign:'left'}}>About me</Typography>
    <Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'18px',lg:'23px'},fontFamily:'serif',color:'var(--color)',marginTop:"20px",marginBottom:"25px"}}>👋 I’m a dedicated web developer with a strong interest in building modern and responsive websites. I enjoy turning ideas into real digital experiences using technologies like HTML, CSS, JavaScript, and React. My goal is to create smooth, visually appealing, and user-focused web applications that deliver great performance and usability.</Typography>
    <Divider sx={{background:'var(--bgcolordiv)',width:"97%",margin:'auto',marginBottom:'20px'}}/>
    {/* <Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:"column",lg:'row'}}}> */}
        <Box sx={{width:'auto',height:'auto'}}>
<Typography className='project' sx={{color:'var(--color1)',fontSize:'25px',textAlign:'left'}}>Qualification & Experience</Typography>
<Typography sx={{fontSize:{xs:'20px',sm:'20px',md:'18px',lg:'23px'},fontFamily:'serif',color:'var(--color)',marginTop:"20px",marginBottom:"25px"}}>🎓 Currently pursuing my Intermediate education, I have gained one year of hands-on experience building responsive and user-friendly web applications. My projects have strengthened my skills in modern web technologies and practical problem-solving.</Typography>
        </Box>
        {/* <Box sx={{width:'500px',height:'200px',border:'1px solid white'}}></Box> */}
    {/* </Box> */}
     
</Box>


 </Box>


{/* hdwh */}
            
        </Box>
        
        
        
        
        
        </>
    )
}