import React from 'react';
import GlobalStyle from './components/GlobalStyle';
import Home from "./pages/Home"
import NewCategory from "./pages/NewCategory"
import NewVideo from "./pages/NewVideo"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page404 from './pages/Page404';
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/NewVideo' element={<NewVideo />}/>
        <Route path='/newcategory' element={<NewCategory />}/>
        <Route path='*' element={<Page404 />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;