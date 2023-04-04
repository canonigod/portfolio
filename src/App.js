import React, { useState, useEffect } from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Navbar } from './components/version2/navbar/Navbar';
import { Hero } from './components/version2/hero/Hero';
import { About } from './components/version2/about/About';
import { Projects } from './components/version2/projects/Projects';
import { Footer } from './components/version2/footer/Footer';

export const ThemeContext = React.createContext();

export default function App() {
    // eslint-disable-next-line
    const [lang, setLang] = useState(() => {
        return JSON.parse(localStorage.getItem('langPref')) || 'en'
    });
    const [currentPage, setCurrentPage] = useState(() => {
        return JSON.parse(localStorage.getItem('currentPage')) || '/portfolio'
    });
    const [translation, setTranslation] = useState({});
    const [width, setWidth] = useState(window.innerWidth);
    const [screenSize, setScreenSize] = useState('');

    useEffect(() => {
        localStorage.setItem('langPref', JSON.stringify(lang));
        localStorage.setItem('currentPage', JSON.stringify(currentPage));
      }, [lang]);

      const getData = () => {
        fetch(`/portfolio/translations/${lang}.json`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            setTranslation(data)
        });
      }
      
      useEffect(()=>{
        getData();
        // eslint-disable-next-line
      },[lang])

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        setScreenSize(width <= 767 ? 'mobile' : width <= 768 || width <= 1024 ? 'tablet' : 'desktop')
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, [width]);

    return (
        <>
            {
            <ThemeContext.Provider value={[lang, translation]}>
                <Navbar screenSize={screenSize} currentPage={currentPage} setCurrentPage={setCurrentPage} setLang={setLang} />
                <BrowserRouter basename="/portfolio">
                    <Routes>
                        <Route exact path="/portfolio" element={<Hero screenSize={screenSize} />} />
                        <Route exact path="/" element={<Hero screenSize={screenSize} />} />
                        <Route path={`/portfolio/${translation.about}`} element={<About screenSize={screenSize} />} />
                        <Route path={`/portfolio/${translation.projects}`} element={<Projects screenSize={screenSize} />} />
                    </Routes>
                </BrowserRouter>
                <Footer screenSize={screenSize} />
            </ThemeContext.Provider>
            }
        </>
    )
}
