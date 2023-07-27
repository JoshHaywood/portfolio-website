import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Message from "./pages/Message";
import Index from "./pages/Index";

import messages from "./data/messages.js";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const [projectName, setProjectName] = useState("");

  return (
    <>
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <Index
              sidebar={sidebar}
              setSidebar={setSidebar}
              projectName={projectName}
              setProjectName={setProjectName}
            />
          }
        />

        {messages.map((message) => (
          <Route
            key={message.path}
            path={message.path}
            element={
              <Message
                heading={message.heading}
                message={message.message}
                redirect={message.redirect}
              />
            }
          />
        ))}
      </Routes>

      <Footer
        sidebar={sidebar}
        setSidebar={setSidebar}
        setProjectName={setProjectName}
      />
    </>
  );
}

export default App;
