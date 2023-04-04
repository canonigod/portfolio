/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { AiOutlineClose } from 'react-icons/ai'

export const Logo = ({ isMobileMenuOpen, handleCloseMobileMenu }) => {
    const logoContainer = css`
        ${
            isMobileMenuOpen ?
            `
                display: flex;
                justify-content: space-between;
                align-items: center;
            `
            :
            `
            `
        }
    `
    const logo = css`
        padding: 10px 100px 10px 30px; 
    `;

    const closeButton = css`
        display: ${ isMobileMenuOpen ? 'block' : 'none'};
        padding-right: 20px;
        font-size: 20px;

        &:hover{
            cursor: pointer;
        }
    `;

    const closeButtonStyles = css`
        fill: var(--gray);
    `

  return (
    <div css={logoContainer}>
        <div css={logo}>
            <a href='/portfolio' style={{color: 'var(--gray) '}}>david-canonigo</a>
        </div>
        <div css={closeButton} onClick={handleCloseMobileMenu}>
            <AiOutlineClose css={closeButtonStyles} />
        </div>
    </div>
  )
}
