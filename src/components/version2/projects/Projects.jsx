import { useState } from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { ProjectsContent } from './ProjectsContent'
import { ProjectsSidebar } from './ProjectsSidebar';
import { useContext } from 'react';
import { ThemeContext } from '../../../App';

export const Projects = ({ screenSize }) => {
    const [skillsSelected, setSkillsSelected] = useState([]);
    const translation = useContext(ThemeContext)[1];

    const container = css`
        display: ${screenSize === 'desktop' ? 'flex' : null};
    `;

  return (
    <div css={container}>
        <ProjectsSidebar skillsSelected={skillsSelected} screenSize={screenSize} setSkillsSelected={setSkillsSelected} />
        <ProjectsContent 
            skillsSelected={skillsSelected} 
            screenSize={screenSize} 
            translation={translation} 
            setSkillsSelected={setSkillsSelected} />
    </div>
    )
}
