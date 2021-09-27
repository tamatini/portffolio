import './App.css';
import { Presentation } from './Data/Presentation';
import { Projects } from './Data/Projects';
import { Socials } from './Data/Socials';
import Landing from './Components/Landing';
import Navbar from './Components/Navigation/Navbar';
import Project from './Components/Projets/Projects';
import Social from './Components/Socials/Social';
import Footer from './Components/Navigation/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing props={Presentation} />
      <Project props={Projects} />
      <Social  props={Socials} />
      <Footer />
    </div>
  );
}

export default App;
