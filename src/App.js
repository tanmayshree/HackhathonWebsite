import "./App.css";
import "particles.js/particles";
import Sponsors from "./Components/Sponsors";
import About from "./Components/About";
import SupportedBy from "./Components/SupportedBy";
import "particles.js/particles";
import Navbar from "./Components/Navbar//Navbar";
import { Hero } from "./Components/Hero//Hero";
import Roadmap from "./Components/Roadmap/Roadmap";
import Speakers from "./Components/Speakers/Speakers";
import Faq from "./Components/FAQs/Faq";
import ContactForm from "./Components/Contact";

function App() {
  window.particlesJS.load("particles", "/particlesjs-config.json");

  return (
    <div className="App">
      <div className="relative">
        <div className="fixed top-0 left-0 -z-50">
          <div id="particles" className="w-screen h-screen bg-black" />
        </div>

        <Navbar />
        <Hero />
        <About />
        <SupportedBy />
        <Roadmap />
        <Speakers />
        <Sponsors />
        <Faq />
        <ContactForm/>

      </div>
    </div>
  );
}

export default App;
