// eslint-disable-next-line
import React, { useState, useEffect, useContext } from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { RiArrowDownSFill } from 'react-icons/ri'

import { ThemeContext } from '../../../App';
import { Logo } from './Logo';
import { MobileMenuOpen } from './MobileMenuOpen';
import { MobileMenu } from './MobileMenu';

const border = '0.5px solid var(--gray);';

const p = css`
    color: var(--gray);
`;

const leftSide = css`
    display: flex;
`;

const menuPages = css`
    padding: 10px 30px;
    border: ${border};
`;

const menuPagesLang = css`
    padding: 10px;
    border: ${border};
`;

const activeTab = css`
    border-bottom: 1px solid var(--orange);
`

// const langSelect = css`
//     padding-right: 30px;
// `;

const secondaryLang = css`
    cursor: pointer;
    display: block;
    padding: 5px 10px;

    &:hover{
        background-color: var(--gray);
        border-radius: 5px;
    }
`;

const mainLang = css`
    position: relative;
    cursor: pointer;
`;

const subLangsStylesWrapper = css`
    position: absolute;
    background: var(--gray50);
    border-radius: 5px;
    left: -7%;
`;

const mainLangWrapper = css`
    display: flex;
    align-items: center;
    gap: 3px;
`;

const btn = css`
    &:hover{
        cursor: pointer;
        color: #fff;
    }
`;

export const Navbar = ({ activeIndex, setActiveIndex, screenSize, setLang, currentPage, setCurrentPage }) => {
    const translation = useContext(ThemeContext);
    const lang = translation[0];
    const translatedCopy = translation[1];

    const [scrolled, setScrolled] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const [hasLanguageChanged, setHasLanguageChanged] = useState(false);
    const pages = [translatedCopy.hello, translatedCopy.about, translatedCopy.projects];
    const languages = ['en', 'es', 'pt']
    
    const onScroll = () => setScrolled(window.scrollY);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        const windowHash = window.location.hash.replace('#', '') || window.location.pathname.replace('/portfolio/', '');
        if(windowHash === translatedCopy.hello){
            setActiveIndex(0);
        }else if(windowHash === translatedCopy.about){
            setActiveIndex(1)
        }
        else if(windowHash === translatedCopy.projects){
            setActiveIndex(2)
        }
        else if(windowHash === translatedCopy.contact){
            setActiveIndex(3)
        }

        if(screenSize === 'mobile' || (screenSize === 'tablet' && isMobileMenuOpen === false)){
            document.querySelector('body').style.overflow = 'unset';
        }else{
            document.querySelector('body').style.overflow = 'hidden';
        }

        return () => window.removeEventListener("scroll", onScroll)
    }, [scrolled, screenSize, isMobileMenuOpen, translatedCopy.hello, translatedCopy.about, translatedCopy.projects, translatedCopy.contact]);

    const container = css`
        display: flex;
        justify-content: space-between;
        border-bottom: ${border};
        position: ${screenSize === 'desktop' ? 'sticky' : 'sticky'};
        top: 0;
        width: 100%;
        z-index: 1;
        `;
        // ${scrolled > 50 ? 
        //     `   position: sticky;
        //         top: 0;
        //         align-items: flex-start;
        //         background-color: var(--primaryMain);
        //         z-index: 1;
        //         box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
        //     ` 
        //     : null};
        

    const handleOpenMobileMenu = () => {
        setIsMobileMenuOpen(true);
    }

    const handleCloseMobileMenu = () => {
        setIsMobileMenuOpen(false);
    }

    // useEffect(() => {
    //     let page = window.location.pathname;
    //     let pathAbout = `/portfolio/${lang === 'en' ? 'about-me' : lang === 'es' ? 'sobre-mi' : 'sobre-mim'}`;
    //     let pathProj = `/portfolio/${lang === 'en' ? 'projects' : lang === 'es' ? 'proyectos' : 'projetos'}`;

    //     if(hasLanguageChanged){
    //         if(currentPage === '/portfolio'){
    //             window.location.href = '/portfolio';
    //         } else if (currentPage === `/portfolio/about-me` || currentPage === `/portfolio/sobre-mi` ){
    //            window.location.href = pathAbout;
    //         } else {
    //             window.location.href = pathProj;
    //         }
    //     }
        
    //     setCurrentPage(page);
    //     setHasLanguageChanged(false);
    // }, [hasLanguageChanged])

    useEffect(() => {
        // let page = window.location.pathname;

        // if(hasLanguageChanged){
        //     if(page === '/portfolio'){
        //         setActiveIndex(0);
        //     } else if (page === `/portfolio/about-me` || page === `/portfolio/sobre-mi` || page === `/portfolio/sobre-mim` ){
        //         setActiveIndex(1);
        //     } else {
        //         setActiveIndex(2);
        //     }
        // }

        setActiveIndex(0);
        
        // setCurrentPage(page);
        setHasLanguageChanged(false);
    }, [hasLanguageChanged])

    return (
        <>
        {
            screenSize === 'desktop' ?
            <nav css={container}>
                    <div css={leftSide}>
                        <Logo />
                        {pages.map((page, i) => {
                            return (
                                <div key={i} css={[menuPages, activeIndex === i ? activeTab : null]}>
                                    {/* <a 
                                        href={i === 0 ? '/portfolio' : `/portfolio/${page}`} 
                                        onClick={() => setActiveIndex(i)} 
                                        css={[p, btn]} 
                                        style={{color: activeIndex === i ? '#fff' : null}}
                                    >
                                        _{page}
                                    </a> */}
                                    <p
                                        onClick={() => setActiveIndex(i)} 
                                        css={[p, btn]} 
                                        style={{color: activeIndex === i ? '#fff' : null}}
                                    >
                                        _{page}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                    <div css={[menuPagesLang, activeIndex === 3 ? activeTab : null]}  onClick={() => {setActiveIndex(3);}}>
                        <div css={leftSide}>
                            {/* <div css={[langSelect, mainLang]}> */}
                            <div css={[mainLang]}>
                                <div 
                                    css={mainLangWrapper}
                                    onMouseOver={() => setIsLangMenuOpen(true)} 
                                    onMouseLeave={() => setIsLangMenuOpen(false)}
                                >
                                    <p css={[p]}>{lang.toUpperCase()}</p>
                                    <RiArrowDownSFill color="#607B96" />
                                </div>
                                {
                                    isLangMenuOpen ? 
                                    <div 
                                        css={subLangsStylesWrapper} 
                                        onMouseOver={() => setIsLangMenuOpen(true)}
                                        onMouseLeave={() => setIsLangMenuOpen(false)}
                                    >
                                        {
                                            languages.map((language, i) => {
                                                if(lang !== language){
                                                    return (
                                                        <p 
                                                            key={i} 
                                                            css={secondaryLang} 
                                                            onClick={() => {
                                                                setLang(language);
                                                                setHasLanguageChanged(true);
                                                            }}
                                                        >
                                                            {language.toUpperCase()}
                                                        </p>
                                                    )
                                                }else{
                                                    return null
                                                }
                                            })
                                        }
                                    </div>
                                    : null
                                }
                            </div>
                            {/* <div>
                                <a 
                                    css={p} 
                                    href={translatedCopy.contact}
                                    style={{color: activeIndex === 3 ? '#fff' : null}}
                                    >
                                    _{translatedCopy.contact}
                                </a>
                            </div> */}
                            </div>
                        </div>
                    </nav>
                : 
                    <>
                        {
                            isMobileMenuOpen ?
                                <MobileMenuOpen 
                                    isMobileMenuOpen={isMobileMenuOpen} 
                                    handleCloseMobileMenu={handleCloseMobileMenu} 
                                    setActiveIndex={setActiveIndex}
                                    activeIndex={activeIndex}
                                    pages={pages}
                                />
                            :
                               <MobileMenu setIsMobileMenuOpen={handleOpenMobileMenu} />
                        }
                    </>
            }
        </>
    )
}
