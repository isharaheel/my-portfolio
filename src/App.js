import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/navbar';
import Intro from './Components/intro/intro';
import Cards from './Components/cards/Cards';
import Skill from './Components/Skills/skills';
import About from './Components/about/About';
import Contact from './Components/contact/contact';
import Footer from './Components/footer/footer';
// import Skills from './Components/Skills/skills';

function App() {
  return (
  <>
  <Navbar/>
  
  <div id="home"><Intro/></div>
  <div id='projects'><Cards/></div>
  <div id='skills'> <Skill/></div>
  <div id='about'><About/></div>
  <div id='contact'><Contact/></div>
  <Footer/>
  
  
  
  </>
  );
}

export default App;
