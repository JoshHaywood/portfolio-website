import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Message from './pages/Message';
import Index from './pages/Index';

const messages = [
  {
    path: '/message-sent',
    heading: 'Thank you',
    message: 'Your message has been sent successfully. You will receive a reply to the email you provided as soon as possible.',
    redirect: '/',
  },
  {
    path: '*',
    heading: 'This page does not exist',
    message: 'The page you were looking for does not exist or has been removed.',
    redirect: -1,
  },
];

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Index />} />

        {messages.map((message) => (
          <Route
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
      <Footer />
    </>
  );
};

export default App;