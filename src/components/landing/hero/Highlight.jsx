/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import PropTypes from 'prop-types';


const backgroundHighlightStyle = css`
    position: relative;

    :before {
        content: '';
        background-color: rgb(35, 86, 80);
        border-radius: 50px;
        opacity: 0.302;
        position: absolute;
        top: 50%;
        width: 100%;
        height: 30%;
    }
`

export default function Highlight({text}) {
  return (
    <span css={backgroundHighlightStyle}>{text}</span>
  )
}


Highlight.propTypes = {
    text: PropTypes.string
};