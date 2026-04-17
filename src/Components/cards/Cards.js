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
    image: "./images/stick.jpg",
    link: "https://isharaheel.github.io/sticky-notes-app/"
  },
  {
    title: "Weather Forecast Dashboard",
    description: "A real-time weather tracking application that provides accurate local forecasts and atmospheric data using a global weather API.",
    image: "./images/weather.jpg",
    link: "https://isharaheel.github.io/weather-forecast-app/"
  },
  {
    title: "Recipe Discovery Engine",
    description: "An interactive culinary search tool designed to browse thousands of recipes with filtered results for ingredients and dietary preferences.",
    image: "./images/food.jpg",
    link: "https://isharaheel.github.io/recipe-discovery-engine/"
  },
   {
    title: "AppVilla Template",
    description: "A modern, responsive Landing Page template for Mobile Apps. Built with React.js and Styled Components, featuring smooth animations and a clean UI.",
    image: "./images/ap.jpg",
    link: "https://isharaheel.github.io/appvilla-template/"
  }
  ,
   {
    title: "Smart AI Toolset",
    description: "A minimalist, high-speed AI utility suite built with React and Vite, featuring a sleek dark-mode design and optimized performance.",
    image: "./images/aii.png",
    link: "https://isharaheel.github.io/smart-ai-toolset/"
  }
  ,
   {
    title: "Berry Core",
    description: "A professional-grade admin interface built with React and Material UI (MUI). This project features a modular architecture, interactive data analytics, and a fully responsive, structured layout designed for seamless enterprise data management.",
    image: "./images/bery.jpg",
    link: "https://react-berry-dashboard-omega.vercel.app/"
  },
     {
    title: "YouTube-Clone",
    description: "A high-fidelity, responsive video streaming application built with React, focusing on optimized state management and seamless user experience.",
    image: "./images/you.jpg",
    link: "https://isharaheel-youtube-clone.vercel.app/"
  }
  ,
  {
    title: "Todo-List-App",
    description: "A professional To-Do List application built with React.js. Using Hooks for efficient state management, it features a clean UI to seamlessly add, edit, and organize daily tasks.",
    image: "./images/to.jpg",
    link: "https://isha-todo-list-app.vercel.app/"
  }
   ,
  {
    title: "Porto Modern E-commerce Store",
    description: "A fully responsive e-commerce storefront developed in React.js, featuring dynamic product interactions, a modern slide-in cart, and a pixel-perfect design across all devices.",
    image: "./images/por.jpg",
    link: "https://porto-ecommerce-store.vercel.app/"
  }
    ,
  {
    title: "Minimal Calculator",
    description: "A minimalist web-based calculator providing a distraction-free user experience. Features a sleek design and optimized performance using Vanilla JavaScript.",
    image: "./images/calc.jpg",
    link: "https://minimal-calculator-blue.vercel.app/"
  }
    ,
  {
    title: "IT Book Store – A Modern Tech Library Explorer",
    description: "A sleek IT Book Store built with React.js and Hooks. Features real-time API integration, dynamic search functionality, and a mobile-first responsive design.",
    image: "./images/bok.jpg",
    link: "https://it-book-store-mu.vercel.app/"
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