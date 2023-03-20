import { useContext } from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { ThemeContext } from '../../../App';
import Highlight from './Highlight';

const parentStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;

  @media screen and (max-width: 767px){
    min-height: 40vh;
  }
`;

const subParentStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 10px
`;

const h1Style = css`
  font-size: 80px;
  letter-spacing: 10px;
  color: var(--darkGreen);

  @media screen and (max-width: 1024px) {
    font-size: 50px;
    letter-spacing: 0px;
  }

  @media screen and (max-width: 767px) {
    font-size: 35px;
    letter-spacing: 0px;
  }
`;

const bottomStyle = css`
  @media screen and (max-width: 767px) {
    padding 0 10px;
  }
`;

export default function Hero() {
  const lang = useContext(ThemeContext)
  const topMessage = lang === 'en' ? 'I don\'t know how to fix printers' : lang === 'es' ? 'No sé como arreglar impresoras' : 'Não sei como consertar impressoras'
  const jobTitle = lang === 'en' ? 'FRONT-END' : lang === 'es' ? 'DESAROLLADOR' :'PROGRAMADOR';
  const positionTitle = lang === 'en' ? 'DEVELOPER' : 'FRONT-END';

  return (
    <div css={parentStyle}>
        <div css={subParentStyle}>
            <div className="top">
                <p>🤭 {topMessage}</p>
            </div>
            <div css={bottomStyle}>
                <h1 css={h1Style}>
                    DAVID <Highlight text="CANONIGO" />
                    <br/>
                    <Highlight text={jobTitle} /> {positionTitle}
                </h1>
            </div>
        </div>
    </div>
  )
}
