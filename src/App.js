import "./app.css";
import Navigation from "./components/Navigation";
import Maincontent from "./components/Maincontent";
import Footer from "./components/Footer";
import Bg from './assets/bg.png'


function App() {
  return (
    <div className="container">
      <header>
        <Navigation/>
      </header>
      <Maincontent/>
      <Footer/>
    </div>
  );
}

export default App;
