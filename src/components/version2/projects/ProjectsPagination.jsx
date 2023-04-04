import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

const bulletPages = css`
    width: 10px;
    height: 10px;
    background: var(--gray50);
    border-radius: 10px;
    margin-bottom: 10px;

    &:hover{
        cursor: pointer;
    }
`;

const bgWhite = css`
    background: #fff;
`;

export const ProjectsPagination = ({ 
    projectsPerPage,
    setActivePage, 
    activePage, 
    skillsSelected,
    screenSize,
    count
}) => {
    const [projects, setProjects] = useState([]);
    let defaultPagination = [1, 2];

    useEffect(() => {
        setProjects([]);
    }, [skillsSelected, count, projectsPerPage]);
   
    useEffect(() => {
        for(let i = 1; i <= Math.ceil(count / projectsPerPage); i++){
            setProjects(prev => [...prev, i]);
        }
    }, [skillsSelected, count, projectsPerPage]);
    
    const paginationWrapper = css`
        position: absolute;
        top: ${screenSize === 'desktop' ? '120px' : '80px'};
    `;

    const mobileStyle = css`
        display: flex;
        gap: 10px;
    `;

  return (
    <div css={paginationWrapper}>
        <div css={mobileStyle}>
            {
                skillsSelected.length > 0 ?
                    projects.map((page, i) => {
                        return (
                            <div 
                                key={i} 
                                css={[bulletPages, (i + 1) === activePage ? bgWhite : null]}
                                onClick={() => {
                                    setActivePage(i + 1)
                                }}
                            >
                            </div>
                        )
                    })
                : 
                defaultPagination.map((page, i) => {
                        return (
                            <div 
                                key={i} 
                                css={[bulletPages, (i + 1) === activePage ? bgWhite : null]}
                                onClick={() => {
                                    setActivePage(i + 1)
                                }}
                            >
                            </div>
                        )
                    })
            }
        </div>
    </div>
  )
}


ProjectsPagination.propTypes = {
    totalProjects: PropTypes.number, 
    projectsPerPage: PropTypes.number, 
    setActivePage: PropTypes.func, 
    activePage: PropTypes.number
}