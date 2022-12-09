import React from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import HomeContainer from "../containers/Pages/HomeContainer";
import AboutContainer from "../containers/Pages/AboutContainer";
import ResumeContainer from "../containers/Pages/ResumeContainer";
import ProjectContainer from "../containers/Pages/ProjectContainer";
import ContactContainer from "../containers/Pages/ContactContainer";

const App = () => {
  return (
    <Layout>
        <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/about" element={<AboutContainer />} />
        <Route path="/resume" element={<ResumeContainer />} />
        <Route path="/project" element={<ProjectContainer />} />
        <Route path="/contact" element={<ContactContainer />} />
      </Routes>
    </Layout>
  );
}

export default App;