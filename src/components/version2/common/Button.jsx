import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

const container = css`
    background: var(--grayBtn);
    border: none;
    border-radius: 7px;
    color: #fff;
    font-size: 12px;
    padding: 5px 10px;

    &:hover{
        background: #151e28;
        cursor: pointer;
        color: #ccc;
    }
`;

export const Button = ({ children }) => {
  return (
    <button css={container}>
        {children}
    </button>
  )
}

Button.propTypes = {
    children: PropTypes.node
}
