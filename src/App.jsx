import Contact from "../components/Contact";
import Footer from "../components/Footer";
import AboutMe from "../components/Hero";
import Navbar from "../components/Navbar";
import Services from "../components/Service";
import Portfolio from "../components/Skills";
import Connect from "../components/popup";

function App(){
  return(
  <>
    <Navbar />
    <AboutMe />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
    
  </>

  )
}

export default App