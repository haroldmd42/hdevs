
import './App.css';
import NavBar from './components/NavBar/Navbar.js';
import Body from './components/Body/Body.js';
import Footer from './components/Footer/Footer.js';
import My from './components/Promotion.js/My.js';
import Projects from './components/Products/Projects.js';
import Study from './components/Estudios/Study.js';
//import ContactForm from './components/Formulario/ContactForm.jsx';
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Body/>
        <My/>
        <Projects/>
        <Study/>
        <Footer/>
    </div>
  );
}

export default App;
