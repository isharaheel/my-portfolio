import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import '../Navbar/navbar.css'
import { SiTicktick } from "react-icons/si";

export default function Skill() {
  return(
<>
<Box sx={{width:{xs:'90%',sm:'90%',md:'90%',lg:'80%'},height:"auto",margin:'auto',marginTop:{xs:'50px',sm:'50px',md:"100px",lg:'150px'}}}>
 <Typography className='project' sx={{color:'var(--color1)',fontSize:'35px',textAlign:'center'}}>My Skillset</Typography>
 <Box sx={{display:'flex',flexDirection:'column',gap:'30px',marginTop:{xs:'50px',sm:'50px',md:"100px",lg:'100px'}}}>
 <Box sx={{width:'100%',height:'auto',display:'flex',flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'},justifyContent:'space-between',gap:{xs:'30px',sm:'30px',md:'none',lg:'none'},alignItems:'center'}}>

{/* frontened box */}
<Box sx={{width:{xs:'80%',sm:'80%',md:'100%',lg:'500px'},height:'auto', boxShadow: '0 0 10px rgba(229, 224, 224, 0.5)',display:'flex',borderRadius:'10px',flexDirection:'column',padding:'10px',paddingTop:'20px',paddingBottom:'20px'}}>
<Box sx={{width:'100%',height:'40px'}}>
    <Typography sx={{color:'var(--color)',fontSize:'23px',textAlign:'center'}}>Frontened Development</Typography>
</Box>
<Divider sx={{background:'var(--bgcolordiv)',marginBottom:'10px',marginTop:'5px'}}/>
<Box sx={{width:'100%',height:'80px',display:'flex',alignItems:'center',gap:'15px',justifyContent:'center'}}>
    <Box sx={{width:'55px',height:'55px',borderRadius:'5px',textAlign:'center', boxShadow: '-10px 0px 10px -5px rgba(229, 224, 224, 0.5)'}}>
<i class="devicon-html5-plain" style={{color:'var(--color1)',fontSize:'40px',display:'inline-block',marginTop:'7px'}}></i>

    </Box>
  <Box sx={{width:'55px',height:'55px',borderRadius:'5px',textAlign:'center', boxShadow: '-10px 0px 10px -5px rgba(229, 224, 224, 0.5)'}}>
<i class="devicon-css3-plain colored" style={{fontSize:'40px',display:'inline-block',marginTop:'7px'}}></i>

    </Box>
    <Box sx={{width:'55px',height:'55px',borderRadius:'5px',textAlign:'center',  boxShadow: '-10px 0px 10px -5px rgba(229, 224, 224, 0.5)'}}>
<i class="devicon-javascript-plain colored" style={{fontSize:'40px',display:'inline-block',marginTop:'7px'}}></i>

    </Box>
    <Box sx={{width:'55px',height:'55px',borderRadius:'5px',textAlign:'center', boxShadow: '-10px 0px 10px -5px rgba(229, 224, 224, 0.5)'}}>
<i class="devicon-react-original colored" style={{fontSize:'40px',display:'inline-block',marginTop:'7px'}}></i>

    </Box>
    <Box sx={{width:'55px',height:'55px',borderRadius:'5px',textAlign:'center', boxShadow: '-10px 0px 10px -5px rgba(229, 224, 224, 0.5)'}}>
<i class="devicon-materialui-plain colored" style={{fontSize:'40px',display:'inline-block',marginTop:'7px'}}></i>

    </Box>

</Box>
</Box>

{/* backened box */}

<Box sx={{width:{xs:'80%',sm:'80%',md:'100%',lg:'500px'},height:'auto', boxShadow: '0 0 10px rgba(229, 224, 224, 0.5)', boxShadow: '0 0 10px rgba(229, 224, 224, 0.5)',display:'flex',borderRadius:'10px',flexDirection:'column',padding:'10px',paddingTop:'20px',paddingBottom:'20px'}}>
<Box sx={{width:'100%',height:'40px'}}>
<Typography sx={{color:'var(--color)',fontSize:'23px',textAlign:'center'}}>Backened Development</Typography>
</Box>
<Divider  sx={{background:'var(--bgcolordiv)',marginBottom:'10px',marginTop:'5px'}}/>
<Box sx={{width:'100%',height:'80px',display:'flex',alignItems:'center',gap:'15px',justifyContent:'center'}}>
    <Box sx={{width:'100px',height:'65px',textAlign:'center',borderRadius:'5px', boxShadow: '-10px 0px 10px -5px rgba(229, 224, 224, 0.5)',background:'white'}}>
<img src="./images/nodelogo.png" alt="nd" style={{width:'60px',height:'50px',marginTop:'6px'}}/>

    </Box>

     <Box sx={{width:'100px',height:'65px',textAlign:'center',borderRadius:'5px', boxShadow: '-10px 0px 10px -5px rgba(229, 224, 224, 0.5)',background:'white'}}>
<img src="./images/leaf.avif" alt="nd" style={{width:'60px',height:'50px',marginTop:'6px'}}/>

    </Box>
  <Box sx={{width:'100px',height:'65px',textAlign:'center',borderRadius:'5px', boxShadow: '-10px 0px 10px -5px rgba(229, 224, 224, 0.5)',background:'white'}}>
<img src="./images/api.png" alt="nd" style={{width:'60px',height:'50px',marginTop:'6px'}}/>

    </Box>
    

</Box>

</Box>
</Box>

{/* tools */}

<Box sx={{width:'auto',height:'auto',display:'flex',flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'},justifyContent:'space-between',gap:{xs:'30px',sm:'30px',md:'none',lg:'none'},alignItems:{xs:'center',sm:'center',md:'center',lg:"flex-start"}}}>
{/* tool and techs */}
<Box sx={{
    width: { xs: '90%', sm: '80%', md: '422px', lg: '500px' }, 
    height: 'auto', // Changed to auto so it can grow when items wrap
    boxShadow: '0 0 10px rgba(229, 224, 224, 0.5)',
    display: 'flex',
    borderRadius: '10px',
    flexDirection: 'column',
    padding: '20px 10px',
}}>
    <Box sx={{ width: '100%', height: '40px' }}>
        <Typography sx={{ color: 'var(--color)', fontSize: '23px', textAlign: 'center' }}>
            Tools & Technologies
        </Typography>
    </Box>
    
    <Divider sx={{ background: 'var(--bgcolordiv)', marginBottom: '20px', marginTop: '5px' }} />

    {/* Parent Container for Icons */}
    <Box sx={{
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap', // Allow items to wrap to next line
        alignItems: 'center',
        gap: '15px',
        justifyContent: 'center'
    }}>
        {/* Tool 1 - Git */}
     <Box sx={{
    width: { xs: 'calc(50% - 15px)', md: '100px' },
    height: '65px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '5px',
    boxShadow: '-10px 0px 10px -5px rgba(229, 224, 224, 0.5)',
    background: 'white',
    alignSelf: 'center' // Prevents the box from stretching vertically
}}>
    <Box 
        component="img"
        src="./images/git.png" 
        alt="git" 
        sx={{ 
            // 40px height for small screens (xs)
            // 55px height for medium/large screens (md)
            height: { xs: '40px', md: '55px' }, 
            width: 'auto',
            objectFit: 'contain'
        }} 
    />
</Box>

        {/* Tool 2 - GitHub */}
        <Box sx={{
            width: { xs: 'calc(50% - 15px)', md: '100px' },
            height: '65px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '5px',
            boxShadow: '-10px 0px 10px -5px rgba(229, 224, 224, 0.5)',
            background: 'white'
        }}>
            <img src="./images/github.png" alt="github" style={{ width: '80px', height: 'auto', objectFit: 'contain' }} />
        </Box>

        {/* Tool 3 - Figma */}
        <Box sx={{
            width: { xs: 'calc(50% - 15px)', md: '100px' },
            height: '65px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '5px',
            boxShadow: '-10px 0px 10px -5px rgba(229, 224, 224, 0.5)',
            background: 'white'
        }}>
            <img src="./images/figma.png" alt="figma" style={{ width: '80px', height: 'auto', objectFit: 'contain' }} />
        </Box>

        {/* Tool 4 - VS Code */}
        <Box sx={{
            width: { xs: 'calc(50% - 15px)', md: '100px' },
            height: '65px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '5px',
            boxShadow: '-10px 0px 10px -5px rgba(229, 224, 224, 0.5)',
            background: 'white'
        }}>
            <img src="./images/vscode.jpg" alt="vscode" style={{ width: '50px', height: 'auto', objectFit: 'contain' }} />
        </Box>
    </Box>
</Box>

{/* ui/sklls */}

<Box sx={{width:{xs:'80%',sm:'80%',md:'800px',lg:'500px'},height:'auto', boxShadow: '0 0 10px rgba(229, 224, 224, 0.5)',display:'flex',borderRadius:'10px',flexDirection:'column',padding:'10px',paddingTop:'20px',paddingBottom:'20px',alignItems:'center',justifyContent:'center'}}>
<Box sx={{width:'100%',height:'40px'}}>
<Typography sx={{color:'var(--color)',fontSize:'23px',textAlign:'center'}}>UI / Design Skills</Typography>
</Box> 
{/* <Divider sx={{background:'white',marginBottom:'10px',marginTop:'5px'}}/> */}
{/* <Divider sx={{background:'var(--bgcolordiv)',marginBottom:'10px',marginTop:'5px'}}/> */}
<Box sx={{width:'80%',height:'auto',marginTop:'20px',display:'flex',flexDirection:'column'}}>
<Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'},alignItems:'center',marginBottom:'10px',gap:'20px'}}>
<SiTicktick size={25} color='var(--color1)'/>
<Typography sx={{fontSize:'20px',color:'var(--color1)',fontFamily:'sans-serif'}}>Responsive Design</Typography>
</Box>
<Divider sx={{marginBottom:'10px',background:'var(--bgcolordiv)'}}/>
<Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'},alignItems:'center',marginBottom:'10px',gap:'20px'}}>
<SiTicktick size={25} color='var(--color1)'/>
<Typography sx={{fontSize:'20px',color:'var(--color1)',fontFamily:'sans-serif'}}>UI / UX Design</Typography>
</Box>
<Divider sx={{marginBottom:'10px',background:'var(--bgcolordiv)'}}/>
<Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'},alignItems:'center',marginBottom:'10px',gap:'20px'}}>
<SiTicktick size={25} color='var(--color1)'/>
<Typography sx={{fontSize:'20px',color:'var(--color1)',fontFamily:'sans-serif'}}>Web Animations</Typography>
</Box>

<Divider sx={{marginBottom:'10px',background:'var(--bgcolordiv)'}}/>
<Box sx={{display:'flex',flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'},alignItems:'center',marginBottom:'10px',gap:'20px'}}>
<SiTicktick size={25} color='var(--color1)'/>
<Typography sx={{fontSize:'20px',color:'var(--color1)',fontFamily:'sans-serif'}}>Modern Layout</Typography>
</Box>
</Box>
</Box>

</Box>
</Box>
        </Box>
        
        
        </>
    )
}