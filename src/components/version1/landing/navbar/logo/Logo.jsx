/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import LogoImg from './logoImg.png'

const parentStyle = css`
  width: 150px;

  @media screen and (max-width: 1024px) {
    margin: 0 auto;
  }

  img{
    box-shadow: none;

  }
`;

// const imgStyle = css`
//   transform: rotate(150deg);
// `;

export default function Logo() {
  return (
    <div css={parentStyle}><a href="#home"><img src={LogoImg} alt="logo" /></a></div>
  )
}
