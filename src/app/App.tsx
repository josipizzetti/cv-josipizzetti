import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import { Projects } from "./components/sections/Projects";
import Education from "./components/sections/Education";

const App = () => (
  <div
    className="bg-black min-h-screen text-[#fffeff]"
    style={{ fontFamily: "'DM Sans', sans-serif", scrollBehavior: "smooth" }}
  >
    <Header />
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <Education />
    <Footer />
  </div>
);

export default App;
