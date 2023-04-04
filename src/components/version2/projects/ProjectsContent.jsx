// eslint-disable-next-line
import React from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

// import { DiReact } from 'react-icons/di';
import { AiOutlineClose } from 'react-icons/ai';
import { ProjectsBoxes } from './ProjectsBoxes';


const border = ` border: 1px solid var(--gray50);`
const visibilityHidden = css`visibility: hidden`;

const topTitleTop = css`
    display: flex;
    align-items: center;
    gap: 5px;
    overflow: hidden;
    width: 92%;
`;

const topTitleBottom = css`
    display: flex;
    align-items: center;
`;

const button = css`
    background: none;
    border: none;
    color: var(--gray);

    &:hover{
        color: #fff;
        cursor: pointer;
    }
`;

export const ProjectsContent = ({ screenSize, translation, skillsSelected, setSkillsSelected }) => {

    const container = css`
        width: ${screenSize === 'desktop' ? '82.5%' : '100%'};
        position: relative;
    `;

    const content = css`
        min-height: 82.5vh;
        display: flex;
        justify-content: center;
        ${border}
    `
    const topTitle = css`
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px;
        width: 230px;
        font-size: 13px;
        color: var(--gray);
        ${skillsSelected.length > 0 ? border : null};
        min-height: 42px;

        &:hover{
            cursor: pointer;
        }
    `;

  return (
        <div css={container}>
            <div css={topTitle}>
                <div css={topTitleTop}>
                    {
                    skillsSelected.map((skill, i) => {
                        return <span key={i}>{skill}{skillsSelected.length > 1 ? ';' : null}</span>
                        }) 
                    }
                </div>
                <div css={topTitleBottom}>
                    <button 
                        type="button" 
                        css={[button, skillsSelected.length === 0 ? visibilityHidden : null]}
                        onClick={() => {
                            setSkillsSelected([]);
                        }}
                    >
                        <AiOutlineClose />
                    </button>
                </div>
            </div>
            <div css={content}>
                <ProjectsBoxes translation={translation} skillsSelected={skillsSelected} screenSize={screenSize} />
            </div>
        </div>
    )
}
