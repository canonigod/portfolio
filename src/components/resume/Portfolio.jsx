import { useContext } from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { ThemeContext } from '../../App';
import CyberGrantsImg from './cybergrants.png'
import RivlyImg from './rivly.png'
import ColibriImg from './colibri.png'

const parentStyle = css`
    min-height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const copyWrapperStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const h2Styles = css`
    font-size: 15px;
    color: var(--lightGreen);
    letter-spacing: 5px;

    @media screen and (max-width: 767px) {
        font-size: 10px;
    }
`;

const h3Styles = css`
    font-size: 50px;
    color: var(--lightGreen);
    letter-spacing: 20px;
    
    @media screen and (max-width: 1024px) {
        font-size: 30px;
        letter-spacing: 10px;
        text-align: center;
    }

    @media screen and (max-width: 767px) {
        font-size: 30px;
        letter-spacing: 3px;
        text-align: center;
    }
`;

const divImgStyles = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 700px;
    margin: 80px auto;

    p {
        margin-top: 20px;
        font-size: 15px;
    }

    h4{
        font-size: 30px;
        letter-spacing: 5px;
    }

    &:hover {
        transform: scale(1.1);
        transition: ease-in-out 0.4s;
    }
`;

const hyperlinkStyles = css`
    @media screen and (max-width: 1024px){
        width: 70%;
        margin: 0 auto;
    }
`;


export const Portfolio = () => {
    const lang = useContext(ThemeContext);
    const miniTitleLang = lang === 'en' ? 'Here are the masterpieces' : lang === 'es' ? 'Aquí están las obras maestras': 'Aqui estão as obras de arte'
    const portfolioLang = lang === 'en' ? 'Projects I\'ve Worked On' : lang === 'es' ? 'Proyectos en los que he trabajado' : 'Projetos em que trabalhei';
    const portfolio = [
        {
            img: CyberGrantsImg,
            techStack: 'React, Unit-Testing (Jest), PL/SQL, SCSS, Figma',
            title: 'CyberGrants',
            url: 'https://cybergrants.com/'
        },
        {
            img: RivlyImg,
            techStack: 'Vue, Unit-Testing (Jest), MySQL, Laravel, PHP',
            title: 'Rivly',
            url: 'https://rivly.com/'
        },
        {
            img: ColibriImg,
            techStack: 'React, SCSS, PHP',
            title: 'Colibri',
            url: 'https://www.colibricontent.com/'
        },
    ]

    return (
        <div id="portfolio" css={parentStyle}>
            <div>
                <div css={copyWrapperStyle}>
                    <h2 css={h2Styles}>{miniTitleLang.toUpperCase()}</h2>
                    <h3 css={h3Styles}>{portfolioLang.toUpperCase()}</h3>
                </div>
                {   
                    portfolio.map((portfolio, index) => {
                        return (
                            <div key={index} css={divImgStyles}>
                                <a css={hyperlinkStyles} href={portfolio.url} target="_blank" rel="noreferrer">
                                    <img src={portfolio.img} alt={portfolio.title} />
                                    <p>{portfolio.techStack}</p>
                                    <h4>{portfolio.title}</h4>
                                </a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
