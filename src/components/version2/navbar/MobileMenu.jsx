/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { RxHamburgerMenu } from 'react-icons/rx';
import { Logo } from './Logo';

const border = '0.5px solid var(--primaryAccent);';

const rightSideMobile = css`
    display: flex;
    align-items: center;
    padding-right: 30px;

    &:hover{
        cursor: pointer;
    }
`;

const container = css`
    display: flex;
    justify-content: space-between;
    border-bottom: ${border};
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: var(--primaryAccent);
`;

const leftSide = css`
    display: flex;
`;

export const MobileMenu = ({ setIsMobileMenuOpen }) => {
    
  return (
    <div css={container}>
        <div css={leftSide}>
            <Logo />
        </div>
        <div css={rightSideMobile} onClick={() => setIsMobileMenuOpen(true)}>
            <RxHamburgerMenu />
        </div>
    </div>
  )
}
