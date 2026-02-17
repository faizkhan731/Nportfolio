// import Navbar from "./components/Navbar";
// import Header from "./components/Header";
// import About from "./components/About";
// // import ThreeBackground from "./UI/ThreeBackground";
// import Glow from "./components/Glow backgrounddistort ";
// import SkillsMarquee from "./components/SkillsMarquee";
// import Experience from "./components/Experience";

// function App() {
//   return (
//     <div className="relative min-h-screen">
//       <Glow /> {/* Background khud animate hoga! */}
//       <div className="relative z-10">
//         <Navbar />
//         <Header />
//         <About />
//         <SkillsMarquee />
//         <Experience />
//       </div>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import SkillsMarquee from "./components/SkillsMarquee";
import Experience from "./components/Experience";
import Glow from "./components/Glow backgrounddistort ";
import Projects from "./components/projects";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";

// Home page layout
const Home = () => {
  return (
    <>
      <Header />
      <About />
      <SkillsMarquee />
      <Experience />
      <Projects />
      <Contact />
      <ChatBot />
      {/* <Footer /> */}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <Glow />
        <div className="relative z-10">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/footer" element={<Footer />} /> */}
            <Route path="/ChatBot" element={<ChatBot />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
