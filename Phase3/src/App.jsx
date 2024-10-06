// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page components
import Home from './pages/Home';
import News from './components/News';
import Leadership from './components/Leadership';
import Success from './components/Success';
import ArticlePage from './pages/ArticlePage';
import SuccessArticle from './pages/SuccessArticle';
import LeadershipArticle from './pages/LeadershipArticle';
import Events from './components/Events';
import EventsArticle from './pages/EventsArticle';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/success" element={<Success />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/success/article/:id" element={<SuccessArticle />} />
        <Route path="/leadership/article/:id" element={<LeadershipArticle />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/article/:id" element={<EventsArticle />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
