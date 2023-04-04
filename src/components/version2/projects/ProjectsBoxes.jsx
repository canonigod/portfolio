import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { Box } from './Box';

import Cybergrants from './images/cybergrants.png';
import Amex from './images/amex.png';
import Rivly from './images/riv.png';
import Colibri from './images/colibri.png';
import { ProjectsPagination } from './ProjectsPagination';

export const ProjectsBoxes = ({ screenSize, skillsSelected, translation }) => {
    const projects = [
        {
            title: "Bonterra",
            bgImg: Cybergrants,
            description: translation.bonterra_description,
            btn: translation.view_website,
            btnUrl: "https://cybergrants.com/",
            techStack: ["React", "HTML", "CSS"],
            techIcon: 'react',
        },
        {
            title: "American-Express",
            bgImg: Amex,
            description: translation.amex_description,
            btn: translation.view_website,
            btnUrl: "https://americanexpress.com/",
            techStack: ["React", "HTML", "CSS", "Cypress"],
            techIcon: 'react',
        },
        {
            title: "Rivly",
            bgImg: Rivly,
            description: translation.rivly_description,
            btn: translation.view_website,
            btnUrl: "https://rivly.com/",
            techStack: ["Vue", "MySQL", "Laravel", "PHP", "CSS", "HTML"],
            techIcon: 'vue',
        },
        {
            title: "Colibri",
            bgImg: Colibri,
            description: translation.colibri_description,
            btn: translation.view_website,
            btnUrl: "https://www.colibricontent.com/",
            techStack: ["CSS", "HTML", "Javascript"],
            techIcon: 'js',
        },
    ];

    const [activePage, setActivePage] = useState(1);
    const [count, setCount] = useState(4);
    const projectsPerPage = 3;
    const lastProjectIndex = activePage * projectsPerPage;
    const firstProjectIndex = lastProjectIndex - projectsPerPage;
    const currentProjects = projects.slice(firstProjectIndex, lastProjectIndex);

    useEffect(() =>{
        let t = [];
        projects.forEach((project, i) => {
            const found = skillsSelected.some(skill=> project.techStack.indexOf(skill) >= 0);
            if(found){
                t.push(project)
            }
        })
        handleChange(t.length)
        // eslint-disable-next-line
    }, [skillsSelected]);

    const handleChange = (num) => {
        setCount(num);
    }

    const container = css`
        color: var(--gray);
        font-size: 15px;
        line-height: 1.5;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        flex-wrap: wrap;
        margin-top: ${screenSize !== 'desktop' ? '100px' : null};
        padding-bottom: ${screenSize !== 'desktop' ? '50px' : null};
    `;

  return (
    <div css={container}>
        <ProjectsPagination 
            activePage={activePage} 
            setActivePage={setActivePage} 
            totalProjects={skillsSelected.length > 0 ? count : projects.length} 
            projectsPerPage={projectsPerPage} 
            projects={projects}
            skillsSelected={skillsSelected}
            count={count}
            screenSize={screenSize}
        />
        <Box 
            currentProjects={currentProjects} 
            skillsSelected={skillsSelected}
            translation={translation}
        />
    </div>
  )
}

ProjectsBoxes.propTypes = {
    skillsSelected: PropTypes.array,
};