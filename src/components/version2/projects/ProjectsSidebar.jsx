// eslint-disable-next-line
import React, { useState } from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { RiArrowDownSFill, RiArrowRightSFill } from 'react-icons/ri';
import { FaLaravel, FaHtml5, FaCss3Alt, FaVuejs, FaPhp, FaNodeJs, FaReact,  } from 'react-icons/fa';
import { GrMysql } from 'react-icons/gr';

const padding = css`padding: 10px 50px 10px 10px;`;
const textWhite = css`color: #fff`;

const projectsTabTitle = css`
    display: flex;
    align-items: flex-start;
    align-items: center;
    gap: 10px;
    border-bottom: 1px solid var(--gray50);
    border-right: 1px solid var(--gray50);
    ${padding};

    &:hover{
        cursor: pointer;
    }
`;

const sideBarTechsWrapper = css`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 0 0 20px;
    font-size: 18px;

    &:hover{
        cursor: pointer;
    }
`;

const techPStyles = css`
    color: var(--gray);
`;

const techStack = [
    {
        name: 'React',
        icon: <FaReact color="#607B96" size={25} />
    },
    {
        name: 'Vue',
        icon: <FaVuejs color="#607B96" size={25} />
    },
    {
        name: 'Laravel',
        icon: <FaLaravel color="#607B96" size={25} />
    },
    {
        name: 'PHP',
        icon: <FaPhp color="#607B96" size={25} />
    },
    // {
    //     name: 'NodeJS',
    //     icon: <FaNodeJs color="#607B96" size={25} />
    // },
    {
        name: 'MySQL',
        icon: <GrMysql color="#607B96" size={25} />
    },
    {
        name: 'HTML',
        icon: <FaHtml5 color="#607B96" size={25} />
    },
    {
        name: 'CSS',
        icon: <FaCss3Alt color="#607B96" size={25} />
    },
]

const checkbox = css`
    width: 15px;
    height: 15px;
    accent-color: var(--gray);
`;

export const ProjectsSidebar = ({ screenSize, translation, skillsSelected, setSkillsSelected }) => {
    const [projectToggle, setProjectToggle] = useState(true);

    const handleIsChecked = (event) => {
        const {value, checked} = event.target;

        if(checked){
            setSkillsSelected(prev => [...prev, value])
        }else{
            setSkillsSelected( prev => {
                return [...prev.filter(tech => tech !== value)]
            })
        }
    }

    const container = css`
        border-left: 1px solid var(--gray50);
        border-bottom: 1px solid var(--gray50);
        min-height: ${screenSize === 'desktop' ? '100vh' : 'auto'};
        width: ${screenSize === 'desktop' ? '265px' : '100%'};
    `;

    const checkboxNoBG = css`
        all: unset;
        width: 13px;
        height: 13px;
        border: 1px solid var(--gray);
    `;

  return (
        <div css={container}>
            <div>
                <div css={projectsTabTitle} onClick={() => setProjectToggle(!projectToggle)}>
                    { projectToggle ? <RiArrowDownSFill color="#fff" />  : <RiArrowRightSFill color="#fff" /> }
                    <p>Projects</p>
                </div>
                {
                    projectToggle ?
                    <div css={padding}>
                        {
                        techStack.map((tec, i) => {
                            return (
                                <label key={i} htmlFor={tec.name}>
                                    <div css={sideBarTechsWrapper} >
                                        <input id={tec.name} css={skillsSelected.includes(tec.name) ? checkbox : checkboxNoBG } value={tec.name} type="checkbox" onChange={handleIsChecked} />
                                        {tec.icon}
                                        <p css={[techPStyles, skillsSelected.includes(tec.name) ? textWhite : null ]}>{tec.name}</p>
                                    </div>
                                </label>
                            )
                        })
                        }
                    </div>
                    : null
                }
            </div>
        </div>
  )
}
