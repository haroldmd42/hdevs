
import './App.css';
import NavBar from './components/NavBar/Navbar.js';
import Body from './components/Body/Body.js';
import Promotion from './components/Promotion.js/Promotion.js';
import Products from './components/Products/Products.js';
import Footer from './components/Footer/Footer.js';
//import ContactForm from './components/Formulario/ContactForm.jsx';
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Body/>
        <Promotion/>
        <Products/>
        
        <Footer/>
    </div>
  );
}

export default App;
