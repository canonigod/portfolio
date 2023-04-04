/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import PropTypes from 'prop-types';

export const Button = ({
    text,
    type
}) => {
    const buttonStyle = css`
        padding: 7px 15px;
        margin-top: 10px;
        background: ${type === 'primary' ? 'var(--lightGreen)' : 'transparent'};
        border: 1px solid var(--lightGreen);
        border-radius: 5px;
        color: ${type === 'primary' ? '#fff' : 'var(--lightGreen)'};
        transition: ease-in-out .2s;
        font-size: 10px;
        text-transform: uppercase;

        &:hover {
            background: ${type === 'primary' ? '#234b46' : 'var(--lightGreen)'};
            border: 1px solid ${type === 'primary' ? '#234b46' : 'var(--lightGreen)'};
            color: ${type === 'primary' ? '#fff' : 'var(--lightGreen)'};
            cursor: pointer;
        }
    `;

  return (
    <button css={buttonStyle}>
        {text}
    </button>
  )
}

Button.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string
};
