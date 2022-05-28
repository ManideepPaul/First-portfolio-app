import Navbar from './components/navbar'
import "./App.css";
import About from './components/aboutMe'
import Projects from './components/projects'
import ContactMe from './components/contactMe';

function App() {
  return (
    <div className='mainContainer min-h-fit flex flex-col scroll-smooth'>
      <Navbar />
      <About />
      <Projects />
      <ContactMe />
    </div>
  );
}

export default App;
