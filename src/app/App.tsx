import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Experience from "./components/sections/Experience";
import Leadership from "./components/sections/Leadership";
import { Projects } from "./components/sections/Projects";
import Education from "./components/sections/Education";
import { PDFDownloadButton } from "./components/PDFDownloadButton";

const App = () => (
  <div
    className="bg-black min-h-screen text-[#fffeff]"
    style={{ fontFamily: "'DM Sans', sans-serif", scrollBehavior: "smooth" }}
  >
    <Header />
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Leadership />
      <Projects />
      <Education />
    </main>
    <Footer />
    <PDFDownloadButton />
  </div>
);

export default App;
