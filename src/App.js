import { lazy, Suspense, createContext, useState } from 'react';

import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './responsive.css';
import { ThreeDot } from "react-loading-indicators";


// Lazy loading des pages
const Home = lazy(() => import('./homePage/home'));
const MenuPage = lazy(() => import('./menuPage/menu'));
const AboutPage = lazy(() => import('./AboutPage/about'));
const ContactPage = lazy(() => import('./ContactPage/contact'));

export const LangueContext = createContext();

function App() {
  const [langue, setLangue] = useState('en');

  return (
    <LangueContext.Provider value={{ langue, setLangue }}>
      <HashRouter>
        <Suspense fallback={<div className='w-full h-[100vh] flex items-center justify-center text-[35px]'>

          <ThreeDot color="black" size="small" text="" textColor="black" />
        </div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </LangueContext.Provider>
  );
}

export default App;

