import Navbar from './components/navbar'
import "./App.css";
import About from './components/aboutMe'
import Projects from './components/projects'
import ContactMe from './components/contactMe';
import Skills from './components/skills';

function App() {
  return (
    <div className='mainContainer min-h-fit flex flex-col scroll-smooth'>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <ContactMe />
    </div>
  );
}

export default App;
