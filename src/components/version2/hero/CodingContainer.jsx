import { useState, useEffect, useContext } from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { ThemeContext } from '../../../App';

const greenColor = css`color: var(--green);`;
const redColor = css`color: var(--redCode);`;
const purpleColor = css`color: var(--purple);`;
const blueColor = css`color: var(--blueCode);`;
const orangeColor = css`color: var(--orange);`;
const yellowColor = css`color: var(--yellowCode);`;
const grayColor = css`color: var(--gray);`;

const codingContainer = css`
    background-color: var(--primaryBlack);
    min-height: 200px;
    min-width: 560px;
    border-radius: 13px;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    box-shadow: 0px 3px 10px rgb(60 157 147 / 0.3);
`;

const container = css`
 font-family: 'Source Code Pro', monospace; 
 padding: 20px 0; 
 font-size: 13px;
`;

const codingBox = css`
    display: flex;
    padding-left: 20px;
    padding-right: 20px;
`;

const p12 = css`padding-left: 12px;`
const p25 = css`padding-left: 25px;`
const p50 = css`padding-left: 50px;`
const p70 = css`padding-left: 70px;`
const p90 = css`padding-left: 90px;`

export const CodingContainer = () => {
    const translation = useContext(ThemeContext);
    const translatedCopy = translation[1];
    const [numberOfLinesOfCode, setNumberOfLinesOfCode] = useState(1);

    useEffect(() => {
        // setNumberOfLinesOfCode(document.querySelectorAll(".tes > div").length);
        setNumberOfLinesOfCode(12);
    },[numberOfLinesOfCode])

  return (
    <div css={codingContainer}>        
        <div css={container}>
            <pre>
                <code css={codingBox}>
                    <div>
                        {Array.from(Array(numberOfLinesOfCode), (e, i) => {
                            return <p key={i} css={grayColor}>{i + 1}</p>
                        })}
                    </div>
                    <div className='tes'>
                        <div css={p12}>
                            <span css={purpleColor}>export const</span> 
                            <span css={blueColor}> {translatedCopy.surviving} = </span>
                            <span css={orangeColor}>{'({'} <span css={redColor}>{translatedCopy.work}</span> {'})'} <span css={purpleColor}>{'=>'}</span> {'{'}</span>
                        </div>
                        <div css={p25}><span css={purpleColor}>{'return ('}</span></div>
                            <div css={p50}>
                                <span css={redColor}>{'<div '} 
                                <span css={orangeColor}>className</span>
                                <span css={blueColor}>=</span>
                                <span css={greenColor}>{`"${translatedCopy.coding_class_name}"`}</span>
                                {' >'}
                                </span>
                                </div>
                            <div css={p50}><span css={blueColor}>{'{'}</span></div>
                                <div css={p70}>
                                    <span css={redColor}>{translatedCopy.work}</span> 
                                    <span css={blueColor}> !== </span> 
                                    <span css={greenColor}>'{translatedCopy.finished}'</span> 
                                    <span css={purpleColor}> ? </span>
                                </div>
                                <div css={p90}>
                                    <span css={yellowColor}>
                                        {`<${translatedCopy.coffee}`} 
                                            <span css={orangeColor}> {translatedCopy.drink_on_repeat}</span>
                                                    <span css={blueColor}>{'={'}<span css={orangeColor}>{translatedCopy.true}</span>{'}'}</span>
                                            <span css={orangeColor}> {translatedCopy.set_limit}</span>
                                                    <span css={blueColor}>{'={'}<span css={orangeColor}>{translatedCopy.false}</span>{'}'}</span>
                                                {' />'}
                                        </span>
                                </div>
                                <div css={p90}>
                                    <span css={yellowColor}>
                                        {`<${translatedCopy.headphones}`} 
                                            <span css={orangeColor}> {translatedCopy.is_on}</span>
                                                    <span css={blueColor}>{'={'}<span css={orangeColor}>{translatedCopy.true}</span>{'}'}</span>
                                                {' />'}
                                        </span>
                                </div>                                
                                <div css={p70}>
                                    <span css={orangeColor}>:</span>
                                    <span css={yellowColor}>
                                        {` <${translatedCopy.be_awesome}`} 
                                            <span css={orangeColor}> {translatedCopy.when}</span>
                                                    <span css={blueColor}>=<span css={greenColor}>"{translatedCopy.always}"</span></span>
                                                {' />'}
                                        </span>
                                </div>
                            <div css={p50}><span css={blueColor}>{'}'}</span></div>
                            <div css={p50}><span css={redColor}>{'</div>'}</span></div>
                        <div css={p25}><span css={purpleColor}>{');'}</span></div>
                        <div css={p12}><span css={orangeColor}>{'}'}</span></div>
                    </div>
                </code>
            </pre>
        </div>
    </div>
  )
}
