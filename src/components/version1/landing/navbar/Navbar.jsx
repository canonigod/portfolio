import PropTypes from 'prop-types';

import { useState, useEffect, useContext } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import Logo from './logo/Logo';
import { ThemeContext } from '../../../App';

// import {TiSocialLinkedinCircular} from "react-icons/ti";


const ulStyle = css`
  display: flex;
  justify-content: center;
  padding: 15px 75px;
  gap: 30px;

  @media (max-width: 767px) {
    padding: 0;
    gap: 10px;
  }
`;

const liStyle = css`
  a {
    color: var(--darkGreen);

    &:hover{
      color: var(--lightGreen);
    }
  }
`;

const flagButton = css`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 5%;

  button {
    background: none;
    border: none;

    &:hover{
      cursor: pointer;
    }
  }

  &:hover{
    cursor: pointer;
  }

  .visible {
    visibility: visible;
  }

  .hidden {
    visibility: hidden;
  }
`;

export default function Navbar({setLang}) {
  const lang = useContext(ThemeContext);
  const portfolioLang = lang === 'en' ? 'Portfolio' : lang === 'es' ? 'Portafolio' : 'Portfólio';
  const aboutLang = lang === 'en' ? 'About' : lang === 'es' ? 'Sobre Mí' : 'Sobre Mim';
  const resumeLang = lang === 'en' ? 'Resume' : lang === 'es' ? 'Currículum' : 'Currículo';
  const contatLang = lang === 'en' ? 'Contact' : 'Contacto';
  const navItems = [
    portfolioLang,
    aboutLang,
    resumeLang,
    contatLang,
  ]
  const defaultNavLinks = ['portfolio', 'about', 'resume', 'contact'];
  const languages = ['🇬🇧', '🇪🇸',  '🇵🇹'];
  const [flagToShow, setFlagToShow] = useState(languages[0]);
  const [activeIndex, setActiveIndex] = useState('');
  const [btnVisible, setBtnVisible] = useState(false);
  const [scrolled, setScrolled] = useState(0);


  const setLangHandler = (lang, flag) => {
    setLang(lang);
    setFlagToShow(flag);
  }

  useEffect(() => {
    setActiveIndex(lang);
  }, [lang, activeIndex]);

  useEffect(() => {
    const langPref = JSON.parse(localStorage.getItem('langPref'));
    
    if(langPref){
      if(langPref === 'en'){
          setFlagToShow('🇬🇧');
        } else if(langPref === 'es'){
          setFlagToShow('🇪🇸');
        }else{
          setFlagToShow('🇵🇹');
      }
    }
  }, []);

  const onScroll = () => setScrolled(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll)
  }, [scrolled]);

  const parentStyle = css`
    @media (max-width: 767px) {
      padding: 10px;
    }
    
    @media (min-width: 1024px) {
      display: flex;
      justify-content: space-between;
      padding: 15px 75px;
    }

    ${scrolled > 50 ? 
      ` position: sticky;
        top: 0;
        align-items: flex-start;
        background-color: #fff;
        z-index: 1;
        box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
      ` 
      : null};
  `;

  const extraMargin = css`
    @media screen and (max-width: 767px){
      margin-right: 35px;
    }
  `;

  return (
    <div css={parentStyle}>
        <Logo />
        <nav style={{position: 'relative'}}>
            <ul css={ulStyle}>
              {
                navItems.map((item, index) => {
                  return (
                    <li css={liStyle} key={index}>
                      <a
                        css={(lang === 'pt' || lang === 'es') && index === 3 ? extraMargin : ''} 
                        href={`#${defaultNavLinks[index]}`} 
                        >
                        {item}
                      </a>
                    </li>
                  )
                })
              }
              <div 
                css={flagButton}
                onMouseEnter={() => {
                  setBtnVisible(true)
                  }
                }
                onMouseLeave={() => {
                  setBtnVisible(false)
                  }
                }
                >
                  {flagToShow}
                {
                    languages.map((flag, index) => {
                      const currentLang = lang === 'en' ? 0 : lang === 'es' ? 1 : 2
                      return(
                        <button
                          className={currentLang === index || btnVisible ? 'visible' : 'hidden'}
                          key={index}
                          onClick={() => setLangHandler(flag === '🇬🇧' ? 'en' : flag === '🇪🇸' ? 'es' : 'pt', flag)}
                        >
                          {flag !== flagToShow && btnVisible ? flag : null} 
                        </button>
                      ) 
                    })
                }
              </div>
            </ul>
        </nav>
    </div>
  )
}

Navbar.propTypes = {
  setLang: PropTypes.func
};