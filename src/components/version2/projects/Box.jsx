// eslint-disable-next-line
import React from 'react';
import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { FaVuejs, FaReact } from 'react-icons/fa';
import { IoLogoJavascript  } from 'react-icons/io';
import { Button } from '../common/Button';

const purple = css`color: var(--purple)`;
const pb10 = css`padding-bottom: 10px;`;

const boxWrapper = css`
    width: 350px;
    height: 350px;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    border: 1px solid var(--gray50);
    border-radius: 10px;
    overflow: hidden;
`;

const boxStyle = css`
    width: 100%;
    min-height: 80px;
    background: var(--primaryAccent);
    padding: 15px 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 15px;
`;

const iconStyle = css`
    font-size: 15px;
    padding: 5px;
    margin: 10px;
    color: var(--primaryBlack);
    border-radius: 5px;
`;

const react = css` background: var(--reactColor);`;
const vue = css`background: var(--green);`;
const js = css`background: #FFFF00;`;

export const Box = ({ skillsSelected, currentProjects, translation }) => {
  return (
    <>
        {
            skillsSelected.length > 0 ?
                currentProjects.map((project, i) => {
                    const found = skillsSelected.some(skill=> project.techStack.indexOf(skill) >= 0);
                    let icon = project.techIcon;
                    let secondaryStyle = icon === "react" ? react : icon === 'vue' || icon === 'node' ? vue : icon === 'js' ? js : null;
                    let iconToDisplay = icon === 'react' ? <FaReact /> : icon === 'vue' ? <FaVuejs /> : icon === 'js' ? <IoLogoJavascript /> : null;
                    // displaying only the projects that match the technologies selected
                    if( found ){
                        return (
                            <div key={i}>
                                <p css={pb10}><span css={purple}>{translation.project} {i + 1}</span> {`// _${project.title.toLowerCase()}`}</p>
                                <div css={boxWrapper} style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.52)), url('${project.bgImg}')` }}>
                                    <div css={[iconStyle, secondaryStyle ]}>
                                        {
                                            iconToDisplay
                                        }
                                    </div>
                                    <div css={boxStyle}>
                                        <p>{project.description}</p>
                                        <Button href={project.btnUrl} target="_blank">{project.btn}</Button>
                                    </div>
                                </div>
                            </div>
                        )
                    }else{
                        return null;
                    }
                })
            :     
            
            currentProjects.map((project, i) => {
                let icon = project.techIcon;
                let secondaryStyle = icon === "react" ? react : icon === 'vue' || icon === 'node' ? vue : icon === 'js' ? js : null;
                let iconToDisplay = icon === 'react' ? <FaReact /> : icon === 'vue' ? <FaVuejs /> : icon === 'js' ? <IoLogoJavascript /> : null;
                
                return (
                    <div key={i}>
                        <p css={pb10}><span css={purple}>Project {i + 1}</span> {`// _${project.title.toLowerCase()}`}</p>
                        <div css={boxWrapper} style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.52)), url('${project.bgImg}')` }}>
                            <div css={[iconStyle, secondaryStyle ]}>
                                {iconToDisplay}
                            </div>
                            <div css={boxStyle}>
                                <p>{project.description}</p>
                                <Button href={project.btnUrl} target="_blank">{project.btn}</Button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </>
  )
}

Box.propTypes = {
    skillsSelected: PropTypes.array,
    currentProjects: PropTypes.array,
}