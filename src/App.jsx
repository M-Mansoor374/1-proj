import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/layout/Layout';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Team from './components/sections/Team';
import Contact from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="team">
          <Team />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
