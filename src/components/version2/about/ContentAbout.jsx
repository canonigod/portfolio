// eslint-disable-next-line
import React from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

// import { DiReact } from 'react-icons/di';
import { AiOutlineClose, AiOutlineUnorderedList } from 'react-icons/ai';
import { ContentCopy } from './ContentCopy';


const border = ` border: 1px solid var(--gray50);`
// const reactColor = css`color: var(--reactColor);`;
const textGray = css`color: var(--gray);`;

const topTitle = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    width: 230px;
    font-size: 13px;
    color: var(--gray);
    ${border}

    &:hover{
        cursor: pointer;
    }
`;

const topTitleTop = css`
    display: flex;
    align-items: center;
    gap: 5px;
`;

const topTitleBottom = css`
    display: flex;
    align-items: center;
`;

const button = css`
    background: none;
    border: none;
    color: var(--gray);

    &:hover{
        color: #fff;
        cursor: pointer;
    }
`;

export const ContentAbout = ({ screenSize, translation, isFileOpen, setIsFileOpen, lang }) => {
    const container = css`
        width: ${screenSize === 'desktop' ? '82.5%' : 'auto'};
    `;

    const content = css`
        ${border}
        min-height: 100vh;
        margin-top: ${screenSize === 'desktop' ? null : '10px'}
    `

  return (
    <>
        {
            isFileOpen !== '' ? 
            <div css={container}>
                {
                    screenSize === 'desktop' ?
                        <div css={topTitle}>
                            <div css={topTitleTop}>
                                <AiOutlineUnorderedList css={textGray} />
                                <p>{isFileOpen}</p>
                            </div>
                            <div css={topTitleBottom}>
                                <button 
                                    type="button" 
                                    css={button}
                                    onClick={() => setIsFileOpen('')}
                                >
                                    <AiOutlineClose />
                                </button>
                            </div>
                        </div>
                    : null
                }
                <div css={content}>
                    <ContentCopy 
                        screenSize={screenSize} 
                        content={translation} 
                        isFileOpen={isFileOpen} 
                        lang={lang}
                    />
                </div>
            </div>
            : null
        }
    </>
  )
}
