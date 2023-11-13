
import './App.css';
import NavBar from './components/NavBar/Navbar.js';
import Body from './components/Body/Body.js';
import Promotion from './components/Promotion.js/Promotion.js';
import Products from './components/Products/Products.js';
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Body/>
        <Promotion/>
        <Products/>
    </div>
  );
}

export default App;
