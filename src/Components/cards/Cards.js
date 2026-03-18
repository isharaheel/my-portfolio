import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import '../Navbar/navbar.css'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function Cards() {
  return (
<Box sx={{ width: {xs:'auto',sm:'auto',md:"auto",lg:'90%'},textAlign:'center',margin:'100px auto' ,alignItems:'center',justifyContent:'center'}}>
<Typography className='project' sx={{color:'var(--color1)',fontSize:'35px'}}>Featured Projects </Typography>
<Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{marginTop:'100px',justifyContent:"center"}}>
<Grid sx={{width:{xs:"90%",sm:'90%',md:"50%",lg:'510px'},height:'400px',position:'relative',cursor:'pointer',textAlign:'left'}}>
  <Box component="img" src="./images/card1.jpg" sx={{width: '100%',height: '300px', borderRadius: '10px',transition: '0.5s',
    '&:hover': {
      borderRadius: '30px'
    }
  }}/>
 <Typography sx={{color: 'var(--color)',fontSize: '25px',fontWeight: 'bold',fontFamily: '"Bricolage Grotesque", sans-serif',fontOpticalSizing: 'auto',fontStyle: 'normal',   fontVariationSettings: '"wdth" 100'
  }}
>
  Youtube Clone
</Typography>
<Typography sx={{ color: 'var(--color1)',fontSize: '20px',fontFamily: '"Bricolage Grotesque", sans-serif',fontOpticalSizing: 'auto',fontStyle: 'normal',fontVariationSettings: '"wdth" 100'}}>Details</Typography>
</Grid>

{/* card 2 */}

<Grid sx={{width:{xs:"90%",sm:'90%',md:"50%",lg:'510px'},height:'400px',position:'relative',cursor:'pointer',textAlign:'left'}}>
 <Box component="img" src="./images/card2.jpg" sx={{width: '100%',height: '300px',  borderRadius: '10px',transition: '0.5s',
  '&:hover': {
    borderRadius: '30px'
  }}}/>
 <Typography
  sx={{color: 'var(--color)',fontSize: '25px',fontWeight: 'bold',fontFamily: '"Bricolage Grotesque", sans-serif',fontOpticalSizing: 'auto',fontStyle: 'normal',fontVariationSettings: '"wdth" 100'}}>
  Youtube Clone
</Typography>
<Typography sx={{ color: 'var(--color1)',fontSize: '20px',fontFamily: '"Bricolage Grotesque", sans-serif',fontOpticalSizing: 'auto',fontStyle: 'normal',fontVariationSettings: '"wdth" 100'}}>Details</Typography>
</Grid>
        
{/* card 3 */}
         
<Grid sx={{width:{xs:"90%",sm:'90%',md:'50%',lg:'505px'},height:'400px',position:'relative',cursor:'pointer',textAlign:'left'}}>
 <Box component="img" src="./images/card3.jpg" sx={{width: '100%',height: '300px',borderRadius: '10px',transition: '0.5s',
 '&:hover': {  borderRadius: '30px'}}}/>
 <Typography
  sx={{color: 'var(--color)',fontSize: '25px',fontWeight: 'bold',fontFamily: '"Bricolage Grotesque", sans-serif',fontOpticalSizing: 'auto',fontStyle: 'normal',fontVariationSettings: '"wdth" 100'}}>
  Youtube Clone
</Typography>
<Typography sx={{ color: 'var(--color1)',fontSize: '20px',fontFamily: '"Bricolage Grotesque", sans-serif',fontOpticalSizing: 'auto',fontStyle: 'normal',fontVariationSettings: '"wdth" 100'}}>Details</Typography>
</Grid>

{/* card 4 */}

{/* <Grid sx={{width:{xs:"90%",sm:'90%',md:'50%',lg:'505px'},height:'400px',position:'relative',cursor:'pointer',textAlign:'left'}}>
 <Box component="img" src="./images/card4.jpg" sx={{width: '100%',height: '300px',borderRadius: '10px',transition: '0.5s',
 '&:hover': {  borderRadius: '30px'}}}/>
 <Typography sx={{color: 'var(--color)',fontSize: '25px',fontWeight: 'bold',fontFamily: '"Bricolage Grotesque", sans-serif',fontOpticalSizing: 'auto',fontStyle: 'normal',fontVariationSettings: '"wdth" 100'}}>
  Youtube Clone
</Typography>
<Typography sx={{ color: 'var(--color1)',fontSize: '20px',fontFamily: '"Bricolage Grotesque", sans-serif',fontOpticalSizing: 'auto',fontStyle: 'normal',fontVariationSettings: '"wdth" 100'}}>Details</Typography>
</Grid> */}
        
      </Grid>
    </Box>
  );
}
