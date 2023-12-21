
import './App.css';
import NavBar from './components/NavBar/Navbar.js';
import Body from './components/Body/Body.js';
import My from './components/Promotion.js/My.js';
import Projects from './components/Products/Projects.js';
import Study from './components/Estudios/Study.js';
import Works from './components/Works/Works.js';
import { Formulario } from './components/Formulario/Formulario.jsx';
//import ContactForm from './components/Formulario/ContactForm.jsx';
function App() {
  
  return (
    <div className="App">
        <NavBar/>
        <Body/>
        <My/>
        <Study/>
        <Projects/>
        <Works/>
        <Formulario/>
        
        
    </div>
  );
}

export default App;
