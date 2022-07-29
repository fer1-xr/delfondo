import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from "./components/Menu"
import Carousel1 from './components/Carousel1';
import Info from "./components/Info"
import Body from "./components/Body"
function App() {
  return (
    <div className="App">
   <Menu/>
<Carousel1/>
<Info/>
<Body/>
    </div>
  );
}

export default App;
