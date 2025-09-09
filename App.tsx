import React from 'react';
import Header from './src/components/Header/Header';
import Hero from './src/components/Hero/Hero';
import About from './src/components/About/About';
import Projects from './src/components/Projects/Projects';
import Contact from './src/components/Contact/Contact';
import Footer from './src/components/Footer/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
