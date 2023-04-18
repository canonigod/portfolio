import React, { useState, useEffect } from 'react';

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
    const [translation, setTranslation] = useState({});
    const [width, setWidth] = useState(window.innerWidth);
    const [screenSize, setScreenSize] = useState('');
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        localStorage.setItem('langPref', JSON.stringify(lang));
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
                    <Navbar 
                        activeIndex={activeIndex} 
                        setActiveIndex={setActiveIndex} 
                        screenSize={screenSize} 
                        setLang={setLang} 
                    />
                    {
                        activeIndex === 0 ?
                            <Hero screenSize={screenSize} />
                        : activeIndex ===1 ? 
                            <About screenSize={screenSize} />
                        : <Projects screenSize={screenSize} />
                    }
                    <Footer screenSize={screenSize} />
                </ThemeContext.Provider>
            }
            </>
    )
}
