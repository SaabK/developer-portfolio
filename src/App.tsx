import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
