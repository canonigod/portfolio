import React, { useState, useEffect } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
// import HashLoader from "react-spinners/HashLoader";
import { motion, AnimatePresence } from "framer-motion"

import { Greetings } from './components/landing/Greetings';
import Navbar from './components/landing/navbar/Navbar';
import Hero from './components/landing/hero/Hero';
import { Portfolio } from './components/resume/Portfolio';
import { About } from './components/about/About';
import {Resume} from './components/resume/Resume'
import { Footer } from './components/footer/Footer';

export const ThemeContext = React.createContext();

// const parentStyle = css`
//     height: 80vh;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `

export default function App() {
    const [lang, setLang] = useState('en');
    // const [isLoading, setIsLoading] = useState(false);
    const [isGreeting, setIsGreeting] = useState(true);
    // const color = "#235650" ;

    // useEffect(() => {
    //     setIsLoading(false);

    //     setTimeout(() => {
    //         setIsLoading(false);
    //     }, 3000);
    // }, [])
    
    useEffect(() => {
        setTimeout(() => {
            setIsGreeting(false);
        }, 6000);
    }, [])
    

    return (
        <>
        {
            // isLoading ? 
            // <div css={parentStyle}>
            //     <HashLoader
            //         color={color}
            //         loading={isLoading}
            //         size={200}
            //         aria-label="Loading Spinner"
            //         data-testid="loader"
            //     />
            // </div>
            //  :
             isGreeting ?
                <AnimatePresence>
                    <motion.div
                        initial="pageInitial"
                        animate="pageAnimate"
                        exit="pageExit"
                        variants={{
                            pageInitial: {
                                opacity: 0
                            },
                            pageAnimate: {
                                opacity: 1
                            },
                            pageExit: {
                                backgroundColor: 'red',
                                opacity: 0,
                                transition: {
                                    delay: 2
                                }
                            },
                        }}
                    >
                        <Greetings />
                    </motion.div>
                </AnimatePresence>
             :
            <ThemeContext.Provider value={lang}>
                <AnimatePresence>
                    <motion.div
                        initial="pageInitial"
                        animate="pageAnimate"
                        exit="pageExit"
                        variants={{
                            pageInitial: {
                                opacity: 0
                            },
                            pageAnimate: {
                                opacity: 1
                            },
                            pageExit: {
                                backgroundColor: 'red',
                                opacity: 0,
                                transition: {
                                    delay: 2
                                }
                            },
                        }}
                    >
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {
                                    scale: .8,
                                    opacity: 0
                                },
                                visible:{
                                    scale: [1, 1.5, 1],
                                    roate: [0, 10, -10, 0],
                                    opacity: 1,
                                    transition: {
                                        delay: .4
                                    }
                                }
                            }}
                        >
                        <Navbar setLang={setLang} />
                        <Hero />
                        <Portfolio />
                        <About />
                        <Resume />
                        <Footer />
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </ThemeContext.Provider>
        }
        </>
    )
}
