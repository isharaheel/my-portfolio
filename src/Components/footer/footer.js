import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer(params) {
return(
    <>

<Box sx={{
  width:{xs:"auto",sm:'auto',md:"auto",lg:"96%"},
  height:'70px',
  display:'flex',
  flexDirection:{xs:'column',sm:'column',md:"column",lg:"row"},
  justifyContent:'space-between',
  alignItems:'center',
  padding:'40px',
  overflowX:'hidden',
  borderTop:'1px solid rgba(255,255,255,0.1)',
  marginTop:'40px'
}}>
  <Typography sx={{color:'var(--color1)', fontSize:'14px'}}>
    © 2026 Isharaheel. All Rights Reserved.
  </Typography>

  <Box sx={{display:'flex', gap:'20px'}}>
    <Typography sx={{color:'var(--color1)', cursor:'pointer'}}>LinkedIn</Typography>
    <Typography sx={{color:'var(--color1)', cursor:'pointer'}}>GitHub</Typography>
    <Typography sx={{color:'var(--color1)', cursor:'pointer'}}>Email</Typography>
  </Box>
</Box> 
    
    
    </>
)
}