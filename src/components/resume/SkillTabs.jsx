import { useState, useContext } from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { ThemeContext } from '../../App';
import Highlight from '../landing/hero/Highlight';

import { AiOutlineCloudDownload } from "react-icons/ai";

const parentStyle = css`
    min-height: 200px;
    margin-top: 100px;

    @media screen and (max-width: 767px){
        margin-top: 30px;
    }
`;

const tabStyle = css`
    font-size: 20px;

    a {
        color: var(--lightgreen);
        display: flex;
        align-items: center;
        gap: 10px;
    }

    &:hover{
        cursor: pointer;
    }

    @media screen and (max-width: 767px){
        font-size: 12px;
    }
`;

const tabsStyle = css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;

    @media screen and (max-width: 767px){
        gap: 10px;
    }
`;

const educationStyle = css`
    h3 {
        font-size: 20px;
    }

    p {
        font-size: 13px;
    }
`;

export const SkillTabs = () => {
    const lang = useContext(ThemeContext);
    const [activeIndex, setActiveIndex] = useState(0);
    const tabs = [
        `${lang === 'en' ? 'skills' : lang === 'es' ? 'habilidades' : 'habilidades'}`,
        `${lang === 'en' ? 'experience' : lang === 'es' ? 'experiencia' : 'experiência'}`,
        `${lang === 'en' ? 'education' : lang === 'es' ? 'educación' : 'educação'}`,
        `${lang === 'en' ? 'resume' : lang === 'es' ? 'currículum' : 'currículo'}`,
    ];
    
    const skills = ['React', 'Vue', 'Javascript/jQuery/JSON', 'REST/RESTFUL API', 'PHP', 'Laravel', 'SQL/MySQL', 'Git/Github/Sourcetree/Bitbucket', 'Peer Review', 'HTML', 'CSS', 'Typescript', 'SASS/SCSS/CSS/CSS3', 'Boostrap', 'Wordpress', 'Adobe Photoshop', 'E-commerce', 'AGILE/SCRUM'];
    const education = [
        {
            college: 'St. Petersburg College',
            degree: 'A.S - Web Development',
            year: '2022'
        },
        {
            college: 'FLAG',
            degree: 'Front-end Development Bootcamp',
            year: '2018'
        },
        {
            college: 'Portuguese, English, Spanish',
            degree: 'Fluent',
            year: null
        },
    ];
    const experience = [
        {
            title: 'Software Developer',
            company: 'Bonterra',
            year: '2022 - Current'
        },
        {
            title: 'Software Developer',
            company: 'Stridek Inc.',
            year: '2021 - 2022'
        },
        {
            title: 'Front-End Developer',
            company: 'EverCommerce',
            year: '2020 - 2021'
        },
        {
            title: 'Front-End Developer',
            company: 'C.E. Hutton',
            year: '2019 - 2020'
        },
        {
            title: 'Front-End Developer Intern',
            company: 'Enyosolutions',
            year: '2019'
        },
    ]

    const infoStyles = css`
        display: grid;
        grid-template-columns: ${activeIndex === 0 ? 'auto auto auto auto' : 'auto auto auto'};
        margin-top: 70px;
        position: relative;
        padding-left: 20px;
        gap: 15px;

        &:after {
            content: '';
            background: rgb(35, 86, 80);
            opacity: 0.302;
            border-radius: 50px;
            height: 50px;
            width: 5px;
            position: absolute;
        }

        @media screen and (max-width: 1024px){
            margin-top: 20px;
            text-align: center;
            grid-template-columns: auto auto;
        }

        @media screen and (max-width: 767px){
            margin-top: 20px;
            text-align: center;
            grid-template-columns: auto;
            margin-bottom: 100px;
        }
    `;

    return (
        <div css={parentStyle}>
            <div css={tabsStyle}>
                {
                    tabs.map((tab ,index) => {
                        return (
                            activeIndex === index && tab !== 'resume'? 
                                <span key={index} css={tabStyle}>
                                    <Highlight text={tab.toUpperCase()} /> 
                                </span>
                            : tab === 'resume' || tab === 'currículum' || tab === 'currículo' ?
                                <span key={index} css={tabStyle}>
                                    <a href="/portfolio/resume.pdf" download="david_canonigo_resume.pdf" target="_blank">{tab.toUpperCase()} <AiOutlineCloudDownload /></a>
                                </span>
                            :
                                <span key={index} css={tabStyle} onClick={() => setActiveIndex(index)}>
                                    <p>{tab.toUpperCase()}</p>
                                </span>
                        )
                    })
                }
            </div>
            <div css={infoStyles}>
                {
                    activeIndex === 0 ?
                        skills.map((skill, i) => {
                            return <p key={i}>{skill}</p>
                        })
                    : activeIndex === 1 ?
                        experience.map((ex, i) => {
                            return (
                                <div css={educationStyle} key={i}>
                                    <h3>{ex.title}</h3>
                                    <p>{ex.company} — {ex.year}</p>
                                </div>
                            )
                        })
                    : activeIndex === 2 ?
                        education.map((ed, i) => {
                            return (
                                <div css={educationStyle} key={i}>
                                    <h3>{ed.degree}</h3>
                                    <p>{ed.college} {ed.year ? `— ${ed.year}` : null}</p>
                                </div>
                            )
                        })
                    : null
                }
            </div>
        </div>
    )
}
