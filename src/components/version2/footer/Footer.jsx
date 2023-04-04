import { useContext } from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { FaLinkedin, FaGithub } from 'react-icons/fa';

import { ThemeContext } from '../../../App';

const container = css`
    position: fixed;
    bottom: 0;
    border-top: 1px solid var(--gray50);
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: var(--gray50);
    padding-left: 10px;
`;

const dFlex = css`
    display: flex;
    gap: 5px;
    align-items: center;
`;

const borderLeftRight = css`
    border-left: 1px solid var(--gray50);
    border-right: 1px solid var(--gray50);
    padding: 10px;
`;

const link = css`
    &:hover{
        svg{
            fill: #fff;
        }
    }
`;

export const Footer = () => {
    const translation = useContext(ThemeContext)[1];

  return (
    <div css={container}>
        <div css={dFlex}>
            <p>{translation.find}</p>
            <a css={[ borderLeftRight, link]} href="https://www.linkedin.com/in/david-canonigo" target="_blank" rel="noreferrer"><FaLinkedin size={25} /></a>
        </div>
        <div>
            <a css={[dFlex, borderLeftRight, link]} href="https://github.com/canonigod" target="_blank" rel="noreferrer">
                <span>@canonigod </span>
                <span><FaGithub size={25} /></span>
            </a>
        </div>
    </div>
  )
}
