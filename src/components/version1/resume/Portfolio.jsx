import { useContext } from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { ThemeContext } from '../../App';
import CyberGrantsImg from './cybergrants.png'
import RivlyImg from './riv.png'
import ColibriImg from './colibri.png'
import { Button } from '../Button';

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
    font-size: 12px;
    color: var(--lightGreen);
    letter-spacing: 5px;

    @media screen and (max-width: 767px) {
        font-size: 10px;
    }
`;

const h3Styles = css`
    font-size: 50px;
    color: var(--lightGreen);
    letter-spacing: 9px;
    
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

const displayGridPortfolio = css`
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(5, 1fr);
    margin-bottom: 15px;
    padding: 100px;
`;

const gridItem = css`
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    min-height: 350px;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: left !important;

    &.card-wide {
        grid-column: span 3;
    }

    &.card-small{
        grid-column: span 2;
    }
`;

const cardWrapper = css`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 100%;
    color: #fff;
`;

const cardWrapperTopTItle = css`
    padding: 2rem;
`

const cardWrapperh4 = css`
    font-size: 12px;
`

const cardWrapperBottomTitle = css`
    font-size: 35px;
`

const cardWrapperBottomParagraph = css`
    font-size: 15px;
    text-shadow: 1px 0px black;
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
            url: 'https://cybergrants.com/',
            projectType: 'Front-End',
            projectSummary: 'They help large, globally invested organizations quickly activate their charitable causes to realize strategic, measurable outcomes. More than half of the Fortune 100 companies and 18 of the 25 largest corporate foundations are CyberGrants clients. 400+ Customers. 650k NPOs. $6.5B in donations annually'
        },
        {
            img: RivlyImg,
            techStack: 'Vue, Unit-Testing (Jest), MySQL, Laravel, PHP',
            title: 'Rivly',
            url: 'https://rivly.com/',
            projectType: 'Front-End + Back-End',
            projectSummary: 'E-commerce/Online Marketplace platform that supports American local businesses'
        },
        {
            img: ColibriImg,
            techStack: 'React, SCSS, PHP',
            title: 'Colibri',
            url: 'https://www.colibricontent.com/',
            projectType: 'Design + Front-End',
            projectSummary: 'Online, fully remote marketing & SEO agency'
        },
        {
            img: CyberGrantsImg,
            techStack: 'React, Unit-Testing (Jest), PL/SQL, SCSS, Figma',
            title: 'CyberGrants',
            url: 'https://cybergrants.com/',
            projectType: 'Front-End',
            projectSummary: 'They help large, globally invested organizations quickly activate their charitable causes to realize strategic, measurable outcomes. More than half of the Fortune 100 companies and 18 of the 25 largest corporate foundations are CyberGrants clients. 400+ Customers. 650k NPOs. $6.5B in donations annually'
        },
    ]

    return (
        <div id="portfolio" css={parentStyle}>
            <div>
                <div css={copyWrapperStyle}>
                    <h2 css={h2Styles}>{miniTitleLang.toUpperCase()}</h2>
                    <h3 css={h3Styles}>{portfolioLang.toUpperCase()}</h3>
                </div>
                <div css={displayGridPortfolio}>
                {
                    portfolio.map((item, i) => {
                        return (
                            <div 
                                key={i} 
                                style={{
                                    background: 
                                        `linear-gradient(0deg, rgba(0, 0, 0, 0.7), 
                                        rgba(0, 0, 0, 0.7)), 
                                        url(${item.img})`
                                }} 
                                css={gridItem}
                                className={i === 0 || i === 3 ? 'card-wide' : 'card-small'}
                            >
                                <div css={cardWrapper}>
                                    <div css={cardWrapperTopTItle}><h4 css={cardWrapperh4}>{item.projectType.toUpperCase()}</h4></div>
                                    <div css={cardWrapperTopTItle}>
                                        <div><h5 css={cardWrapperBottomTitle}>{item.title.toUpperCase()}</h5></div>
                                        <div><p css={cardWrapperBottomParagraph}>{item.projectSummary}</p></div>
                                        <div>
                                            <a 
                                                href={item.url} 
                                                target="_blank" 
                                                rel="noreferrer"
                                            >
                                                <Button type="primary" text="Learn More" />
                                            </a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}
