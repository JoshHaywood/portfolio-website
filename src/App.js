import * as React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Message from './components/message';
import Index from './components/index/index-page';
import Projects from './components/projects-page';
import ContactPage from './components/contact-page';
import ProjectsDetailed from './components/projects-detailed/projects-detailed';


function App() {
  return (
    <div>
      <Header />
      
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/:id" element={<ProjectsDetailed />}/>
        <Route path="/contact" element={<ContactPage />}/>
        <Route path="/message-sent" element={<Message
          heading={"Thank you"}
          message={"Your message has been sent successfully. You will receive a reply to the email you provided as soon as possible."}
        />} />
        <Route path="*" element={<Message
          heading={"This page does not exist"}
          message={"The page you were looking for does not exist or has been removed."}
        />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
