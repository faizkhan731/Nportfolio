import Header from "./components/Header";
import About from "./components/About";
import SkillsMarquee from "./components/SkillsMarquee";
import Experience from "./components/Experience";
import Projects from "./components/projects";
import Contact from "./components/Contact";
const Home = () => {
  return (
    <>
      <section id="home">
        <Header />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <SkillsMarquee />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
};
export default Home;
