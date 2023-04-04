import { useContext } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { ThemeContext } from '../../../App';

const codingContainerTitle = css`
    height: 50px;
    background-color: rgb(35 39 47);
    border-radius: 13px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    display: flex;
    align-items: center;
    padding-left: 30px;
    box-shadow: 0px 3px 10px rgb(60 157 147 / 0.2);
`;

const codingContainerTitleCopy = css`
    color: rgb(153 161 179);
    font-size: 12px;
`

export const CodingContainerTop = () => {
    const translation = useContext(ThemeContext);
    const translatedCopy = translation[1];
  return (
    <div css={codingContainerTitle}>
        <span css={codingContainerTitleCopy}>{translatedCopy.surviving}.jsx</span>
    </div>
  )
}
