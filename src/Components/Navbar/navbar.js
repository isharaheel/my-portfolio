import React, { useState } from "react";
import './navbar.css';
// import { Link } from "react-scroll"; // smooth scrolling
import { FaInstagram } from "react-icons/fa6";
import { TbBrandFacebook } from "react-icons/tb";
import { Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-scroll";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
const [open,setOpen] = useState(false);

return (
        <>
{/* <Box
  sx={{
    width: { xs: '90%', sm: '85%', md: '80%', lg: '60%' },
    position:'fixed', top: '10px',left: {xs:'0%',sm:'0%',md:"8%",lg:'50%'},  background: 'rgba(255,255,255,0.1)', zIndex: 1000,
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',

    margin: '10px auto',
    padding: { xs: '15px', sm: '18px', md: '20px' },

    borderRadius: '15px',

    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    flexDirection: { xs: 'column', sm: 'column', md: 'row' },

    gap: { xs: '15px', md: '0px' }
  }}
>

<Typography
  sx={{
    fontWeight: 'bold',
    fontSize: { xs: '22px', sm: '24px', md: '25px' },
    color: 'var(--color)'
  }}
>
  เ૨
</Typography>


<Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row', md: 'row' },

    gap: { xs: '10px', sm: '20px', md: '25px' },

    color: 'var(--color1)',
    fontFamily: 'sans-serif',

    alignItems: 'center'
  }}
>

<Typography sx={{ fontSize: '13px', cursor: 'pointer' }}>
  <Link to="home">Home</Link>
</Typography>

<Typography sx={{ fontSize: '13px', cursor: 'pointer' }}>
  <Link to="projects">Projects</Link>
</Typography>

<Typography sx={{ fontSize: '13px', cursor: 'pointer' }}>
  <Link to="skills">Skills</Link>
</Typography>

<Typography sx={{ fontSize: '13px', cursor: 'pointer' }}>
  <Link to="about">About</Link>
</Typography>

<Typography sx={{ fontSize: '13px', cursor: 'pointer' }}>
  <Link to="contact">Contact</Link>
</Typography>

</Box>
</Box> */}





<Box
sx={{
    // width:{xs:'10%'},
position:'fixed',
top:{xs:'25px',sm:'20px',md:"10px",lg:'1px'},
left:{xs:'47%',sm:'48%',md:"48%",lg:'50%'},
transform:'translateX(-50%)',
width:{xs:'60%',sm:'85%',md:'60%',lg:'98%'},

background:'rgba(255,255,255,0.1)',
backdropFilter:'blur(20px)',
WebkitBackdropFilter:'blur(20px)',

padding:'15px 20px',
// borderRadius:'15px',

display:'flex',
justifyContent:'space-between',
alignItems:'center',

zIndex:1000
}}
>

<Typography sx={{fontWeight:'bold',fontSize:'25px',color:'var(--color)'}}>
เ૨
</Typography>

<IconButton
onClick={()=>setOpen(!open)}
sx={{display:{xs:'block',md:'none'},color:'var(--color)'}}
>
{open ? <IoClose/> : <IoMdMenu/>}
</IconButton>

<Box
sx={{
display:{
xs: open ? 'flex' : 'none',
md:'flex'
},

position:{xs:'absolute',md:'static'},
top:{xs:'70px',md:'auto'},
left:0,

width:{xs:'100%',md:'auto'},

flexDirection:{xs:'column',md:'row'},

gap:'25px',
color:'var(--color1)',
fontFamily:'sans-serif',

background:{xs:'rgba(0,0,0,0.8)',md:'transparent'},
padding:{xs:'20px 0',md:'0'},
borderRadius:'10px',

alignItems:'center'
}}
>

<Typography sx={{fontSize:'13px',cursor:'pointer'}}>
<Link to="home" smooth>Home</Link>
</Typography>

<Typography sx={{fontSize:'13px',cursor:'pointer'}}>
<Link to="projects" smooth>Projects</Link>
</Typography>

<Typography sx={{fontSize:'13px',cursor:'pointer'}}>
<Link to="skills" smooth>Skills</Link>
</Typography>

<Typography sx={{fontSize:'13px',cursor:'pointer'}}>
<Link to="about" smooth>About</Link>
</Typography>

<Typography sx={{fontSize:'13px',cursor:'pointer'}}>
<Link to="contact" smooth>Contact</Link>
</Typography>

</Box>

</Box>

        </>
     
    );
}