import { useContext } from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { ThemeContext } from '../../App';
import { SkillTabs } from './SkillTabs';

const parentStyle = css`
    min-height: 100vh;
    position: relative;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 150px;
    padding: 146px 0 15px;

    @media screen and (max-width: 767px){
        padding: 50px 15px;
    }
`;

const row = css`
    margin-right: -15px;
    margin-left: -15px;
`;

const rowH3Style = css`
    font-size: 60px;
    font-style: italic;

    @media screen and (max-widtH: 1024px){
        font-size: 20px;
        padding: 20px;
    }
`;

const pageTitle = css`
    position: relative;
    line-height: 1;
    margin: 0 0 50px;
    padding-left: 75px;
    color: var(--lightGreen);

    &:after{
        content: "";
        height: 3px;
        left: 2%;
        position: absolute;
        top: calc(50% - 1.5px);
        width: 35px;
        background-color: var(--lightGreen);
    }

    @media screen and (max-width: 767px){
        padding-left: 50px;
    }
`;

export const Resume = () => {
    const lang = useContext(ThemeContext);

  return (
    <div id="resume" css={parentStyle}>
        <div css={row}>
            <div>
                <div>
                    <p css={pageTitle}>{lang === 'en' ? 'Resume' : lang === 'es' ? 'Currículum' : 'Currículo'}</p>
                    {
                        lang === 'en' ?
                            <h3 css={rowH3Style}>"I'm not superstitious, but I'm a little stitious" — Michael Scott</h3>
                        : lang === 'es' ?
                            <h3 css={rowH3Style}>"No soy supersticioso, pero soy un poco sticioso" — Michael Scott</h3>
                        : <h3 css={rowH3Style}>"Não sou supersticioso, mas sou um pouco sticioso" — Michael Scott</h3>
                    }
                    
                </div>
            </div> 
        </div>
        <div css={row}>
            <SkillTabs />
        </div>
    </div>
  )
}
