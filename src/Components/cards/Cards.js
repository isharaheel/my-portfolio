import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import '../Navbar/navbar.css';

// Professional Project Data
const projects = [
  {
    title: "Sticky Notes Workspace",
    description: "A lightweight digital memo tool for organizing quick thoughts and tasks, featuring local data persistence.",
    image: "/images/card1.jpg",
    link: "https://isharaheel.github.io/sticky-notes-app/"
  },
  {
    title: "Weather Forecast Dashboard",
    description: "A real-time weather tracking application that provides accurate local forecasts and atmospheric data using a global weather API.",
    image: "./images/card2.jpg",
    link: "https://isharaheel.github.io/weather-forecast-app/"
  },
  {
    title: "Recipe Discovery Engine",
    description: "An interactive culinary search tool designed to browse thousands of recipes with filtered results for ingredients and dietary preferences.",
    image: "./images/card3.jpg",
    link: "https://isharaheel.github.io/recipe-discovery-engine/"
  }
];

export default function Cards() {
  return (
    <Box sx={{ width: { xs: '90%', lg: '90%' }, textAlign: 'center', margin: '100px auto' }}>
      <Typography className='project' sx={{ color: 'var(--color1)', fontSize: '35px' }}>
        Featured Projects
      </Typography>

      <Grid container rowSpacing={8} columnSpacing={{ xs: 1, sm: 2, md: 4 }} sx={{ marginTop: '50px', justifyContent: "center" }}>
        
        {projects.map((project, index) => (
          <Grid 
            key={index}
            component="a" 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            sx={{
              width: { xs: "100%", sm: '90%', md: "45%", lg: '510px' }, 
              height: 'auto', 
              cursor: 'pointer', 
              textAlign: 'left',
              textDecoration: 'none', 
              outline: 'none',
              border: 'none',
              display: 'block',
              padding: '10px',
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'translateY(-10px)' }
            }}
          >
            <Box 
              component="img" 
              src={project.image} 
              sx={{
                width: '100%',
                height: '300px', 
                borderRadius: '10px',
                transition: '0.5s',
                border: '1px solid lightgrey',
                objectFit: 'cover',
                '&:hover': { borderRadius: '30px' }
              }}
            />
            
            <Typography sx={{ 
              color: 'var(--color)', 
              fontSize: '25px', 
              fontWeight: 'bold', 
              fontFamily: '"Bricolage Grotesque", sans-serif', 
              marginTop: '15px' 
            }}>
              {project.title}
            </Typography>

            <Typography sx={{ 
              color: 'var(--color1)', 
              fontSize: { xs: '16px', md: '18px' }, 
              fontFamily: '"Bricolage Grotesque", sans-serif', 
              lineHeight: '1.4' 
            }}>
              {project.description}
            </Typography>
          </Grid>
        ))}

      </Grid>
    </Box>
  );
}