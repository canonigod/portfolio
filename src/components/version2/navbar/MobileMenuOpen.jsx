/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { Logo } from './Logo';

const border = '0.5px solid var(--gray50);';

const mobileMenuStyles = css`
    min-height: 100vh;
    background-color: var(--primaryMain);
    border-radius: 5px;
    width: 100%;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2;
`

const menuPagesMobile = css`
    display: flex;
    align-items; center;
    padding: 10px 30px;
    border: ${border};
    color: var(--gray);
`;

const activeTabMobile = css`
    color: #fff;
`

export const MobileMenuOpen = ({
        activeIndex, 
        isMobileMenuOpen, 
        handleCloseMobileMenu,
        setActiveIndex, 
        pages,
    }) => {

  return (
    <div css={mobileMenuStyles}>
        <Logo isMobileMenuOpen={isMobileMenuOpen} handleCloseMobileMenu={handleCloseMobileMenu} />
        {pages.map((page, i) => {
            return (
                <a 
                    key={i} 
                    href={i === 0 ? '/portfolio' : page} 
                    css={[menuPagesMobile, activeIndex === i ? activeTabMobile : null]} 
                    style={{color: activeIndex === i ? '#fff' : null}}
                    onClick={() => {
                        handleCloseMobileMenu();
                        setActiveIndex(i);
                    }}
                >
                    _{page}
                </a>
            )
        })}
    </div>
  )
}
