import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from "./components/Menu"
import Carousel1 from './components/Carousel1';
import Info from "./components/Info"
import Body from "./components/Body"
import Footer from "./components/Footer"
function App() {
  return (
    <div className="App">
   <Menu/>
<Carousel1/>
<Info/>
<Body/>
<Footer/>
    </div>
  );
}

export default App;
