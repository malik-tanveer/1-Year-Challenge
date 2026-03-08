import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Hire_me from "./components/Hire_me"
import Contact from "./components/Contact"

function App() {
  return (
    <>
    <div className="font-sans " style={{
      backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.07) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,0,0,0.07) 1px, transparent 1px)
    `,
    backgroundSize: "35px 35px"
  }}>
      

      <Navbar />
      <main className="pt-24 space-y-32">

        <section id="about">
          <About />
        </section>


        <section id="skills">
          <Skills />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="whyhireme">
          <Hire_me />
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>
    </div>
    </>
  )
}

export default App