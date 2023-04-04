import { useContext } from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { CodingContainer } from './CodingContainer';
import { CodingContainerTop } from './CodingContainerTop';
import { ThemeContext } from '../../../App';

const container = css`
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 768px){
        margin-top: 50px;
    }
`;

const copyStyles = css`
    padding-left: 30px;
    padding-right: 30px;
`;

const small = css`
    font-size: 13px;
`;

const h1 = css`
    font-size: 62px;
`;

const h2 = css`
    font-size: 32px;
    color: var(--purple);

    @media screen and (max-width: 768px){
        font-size: 26px;
    }
`;

const varLinks = css`
    display: block;

    @media screen and (max-width: 768px){
        margin-bottom: 10px;
        font-size: 11px;
    }
`;

const comment = css`
    color: var(--gray);

    @media screen and (max-width: 768px){
        font-size: 13px;
    }
`;
const constColor = css`color: var(--purple)`;
const varColor = css`color: var(--green);`;
const linkColor = css`color: var(--orange);`;
const textWhite = css`color: #fff;`;

const bottomWrapper = css`
    margin-top: 40px;
`
const comments = css`padding-bottom: 15px;`;

export const Hero = ({ screenSize }) => {
    const translation = useContext(ThemeContext);
    const translatedCopy = translation[1];
  return (
    <div id={translatedCopy.hello} css={container}>
        <div css={copyStyles}>
            <div>
                <small css={small}>{translatedCopy.intro}</small>
                <h1 css={h1}>David Canonigo</h1>
                <h2 css={h2}><span>{'> ' + translatedCopy.job_title}</span></h2>
            </div>
            <div css={bottomWrapper}>
                <div css={comments}>
                    <p css={comment}>{`/* ${translatedCopy.printer_joke} */`}</p>
                    <p css={comment}>{`/* ${translatedCopy.checkout_github_linkedin} */`}</p>
                </div>
                <a 
                    css={varLinks}
                    href="https://github.com/canonigod/" 
                    target="_blank"
                    rel="noreferrer"
                    >
                        <span css={constColor}>const </span> 
                        <span css={varColor}>githubLink</span> 
                        <span css={textWhite}> =</span>
                        <span css={linkColor}> "https://github.com/canonigod/"<span css={textWhite}>;</span></span>
                </a>
                <a 
                    css={varLinks}
                    href="https://www.linkedin.com/in/david-canonigo" 
                    target="_blank"
                    rel="noreferrer"
                    >
                        <span css={constColor}>const </span> 
                        <span css={varColor}>linkedinLink </span> 
                        <span css={textWhite}>=</span>
                        <span css={linkColor}> "https://www.linkedin.com/in/david-canonigo"<span css={textWhite}>;</span></span>
                </a>
            </div>
        </div>
        {
            screenSize === 'desktop' ?
                <div>
                    <div>
                        <CodingContainerTop />
                        <CodingContainer />
                    </div>
                </div>
            : null
        }
    </div>
  )
}
