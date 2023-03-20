/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Contact } from '../contact/Contact';

import Footerbg from './footer-bg.png';

const parentStyle = css`
    min-height: 450px;
    width: 100%;
    background-image: url(${Footerbg});
    background-repeat: no-repeat;
    background-size: cover;
    background-color: var(--darkGreen);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    padding-bottom: 30px;
`;

const copyRightStyle = css`
    color: #fff;
    padding-bottom: 20px;
`;

const gitHubStyles = css`
    color: #fff;
    margin-top: 10px;

    &:hover{
        color: #ccc;
    }
`;

export const Footer = () => {
  return (
    <div id="contact" css={parentStyle}>
        <Contact />
        <div>
            <p css={copyRightStyle}>Copyright © {new Date().getFullYear()} David Canonigo. All Rights Reserved.</p>
            <p><a href="https://github.com/canonigod/" target="_blank" rel="noreferrer" css={gitHubStyles}>Github</a></p>
        </div>
    </div>
  )
}
