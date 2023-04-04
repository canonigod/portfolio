/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { AiOutlineFilePdf, AiOutlineUnorderedList } from 'react-icons/ai';
// import { DiReact } from 'react-icons/di';

const textWhite = css`color: #fff;`;
// const reactColor = css`color: var(--reactColor);`;

export const Files = ({ 
    folder, 
    isFolderOpen,
     activeIndex, 
     isFileOpen, 
     setIsFileOpen,
     translation
}) => {
    const bioFiles = [
        {
            icon: <AiOutlineUnorderedList css={textWhite} />,
            name: translation.personal_info + '.md'
        }
    ];
    const experienceFiles = [
        {
            icon: <AiOutlineUnorderedList css={textWhite} />,
            name: translation.resume + '.md'
        },
        {
            icon: <AiOutlineUnorderedList css={textWhite} />,
            name: translation.skills + '.md'
        },
        {
            icon: <AiOutlineFilePdf color="#ff0000" />,
            name: translation.download_resume + '.pdf'
        }
    ];

    const educationFiles = [
        {
            icon: <AiOutlineUnorderedList css={textWhite} />,
            name: translation.college + '.md',
        },
        {
            icon: <AiOutlineUnorderedList css={textWhite} />,
            name: translation.bootcamp + '.md'
        },
    ];

    const filesStyle = css`
        display: flex;
        align-items: center;
        gap: 5px;
        font-size: 14px;
        padding: 5px 0 3px 24px;
        color: var(--gray);

        &:hover{
            cursor: pointer;
        }
    `;

  return (
    <div>
        {
            folder === translation.bio && isFolderOpen && activeIndex === 0 ?
                bioFiles.map((file, i) => {
                    return(
                        <div 
                            css={filesStyle} 
                            key={i} 
                            onClick={() => {
                            setIsFileOpen(file.name);
                        }}>
                            <span>{file.icon}</span>
                            <span css={isFileOpen === file.name ? textWhite : null}>{file.name}</span>
                        </div>
                    )    
                })
            : folder === translation.experience && isFolderOpen && activeIndex === 1  ?
                experienceFiles.map((file, i) => {
                return(
                        <div 
                            css={filesStyle} 
                            key={i} 
                            onClick={() => {
                                if(file.name !== translation.download_resume + '.pdf'){
                                    setIsFileOpen(file.name);
                                }
                        }}>
                            <span>{file.icon}</span>
                            {
                                file.name === translation.download_resume + '.pdf' ?
                                    <a 
                                        href="/portfolio/david-canonigo.pdf" 
                                        download="david_canonigo_resume.pdf" 
                                        target="_blank"
                                    >
                                        {file.name}
                                    </a>
                                : 
                                    <span css={isFileOpen === file.name ? textWhite : null}>{file.name}</span>
                            }
                            
                        </div>
                    ) 
                })
            : folder === translation.education && isFolderOpen && activeIndex === 2  ?
                educationFiles.map((file, i) => {
                return(
                        <div 
                            css={filesStyle} 
                            key={i} 
                            onClick={() => {
                            setIsFileOpen(file.name);
                        }}>
                            <span>{file.icon}</span>
                            <span css={isFileOpen === file.name ? textWhite : null}>{file.name}</span>
                        </div>
                    ) 
                })
            : null
        }
    </div>
  )
}
