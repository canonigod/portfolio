import { useState, useContext, useEffect } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { Sidebar } from './Sidebar';
import { ThemeContext } from '../../../App';
import { ContentAbout } from './ContentAbout';

export const About = ({ screenSize }) => {
    const translation = useContext(ThemeContext);
    const translatedCopy = translation[1];
    const lang = translation[0];
    const [isFileOpen, setIsFileOpen] = useState('');

    useEffect(() => {
        setIsFileOpen(`${translatedCopy.personal_info}.md`)
    }, [translatedCopy]);

    const container = css`
        position: relative;
        display: flex;
        flex-direction: ${screenSize === 'desktop' ? null : 'column'};
        padding-bottom: 50px;
    `;

  return (
    <div id="about-me" css={container}>
        <Sidebar 
            screenSize={screenSize} 
            translation={translatedCopy} 
            isFileOpen={isFileOpen} 
            setIsFileOpen={setIsFileOpen} 
        />
        {
            isFileOpen !== '' && isFileOpen !== undefined ?
            <ContentAbout 
                screenSize={screenSize} 
                translation={translatedCopy} 
                isFileOpen={isFileOpen}
                setIsFileOpen={setIsFileOpen}
                lang={lang}
            />
            : null
        }
    </div>
  )
}
