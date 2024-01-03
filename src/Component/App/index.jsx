import React from "react";
import Header from "../Header";
import About from "../About";
import Layout from "../Layout";
import Main from "../Main";
import ProjectsSection from "../ProjectsSection";
import Contact from "../Contact";

function App() {
  return (
    <Layout>
      <Header />
      <Main>
        <About />
        <ProjectsSection />
        <Contact />
      </Main>
    </Layout>
  );
}

export default App;
