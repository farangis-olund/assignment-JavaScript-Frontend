import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/index.css';
import Home from './views/Home';
import Contacts from './views/Contacts';
import News from './views/News';
import NewsDetails from './views/NewsDetails';
import NotFound from './views/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import BottomFooter from './components/BottomFooter'
import AutoScrollToTop from './components/Generics/AutoScrollToTop';
import ScrollToTop from './components/Generics/ScrollToTop';
import { ArticleProvider } from './contexts/ArticleContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ArticleProvider>
        <AutoScrollToTop />
          <ScrollToTop/>
          <div className="wrapper">
            <HeaderWithCondition />  
            <Routes>
              <Route path='/' element={<Home/>} />  
              <Route path='/contacts' element={<Contacts/>} />  
              <Route path='/news' element={<News/>} />  
              <Route path='/newsdetails/:id' element={<NewsDetails/>} />  
              <Route path='*' element={<NotFound/>} />  
            </Routes>
            <Footer/>
            <BottomFooter/>
          </div>
      </ArticleProvider>
    </BrowserRouter>
  </React.StrictMode>
);

function HeaderWithCondition() {
  const location = useLocation();
  const isNotFound = location.pathname === '/*'

  if (isNotFound) {
    return null
  }
  return <Header />
}