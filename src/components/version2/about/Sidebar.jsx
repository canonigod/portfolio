// eslint-disable-next-line
import React, { useState } from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { AiFillFolder } from 'react-icons/ai';
import { RiArrowDownSFill, RiArrowRightSFill } from 'react-icons/ri'
import { HiOutlineMail } from 'react-icons/hi'
import { IoLogoLinkedin } from 'react-icons/io'
import { Files } from './Files';

const padding = css`padding: 10px 50px 10px 10px;`;

const container = css`
    border-left: 1px solid var(--gray50);
    border-right: 1px solid var(--gray50);
    border-bottom: 1px solid var(--gray50);
    min-height: 100vh;
    width: 265px;
`;

const folderWrapper = css`
    display: flex;
    align-items: center;
    gap: 5px;

    &:hover{
        cursor: pointer;
    }
`;

const personalInfoWrapper = css`
    display: flex;
    align-items: flex-start;
    align-items: center;
    gap: 10px;
    border: 1px solid var(--gray50);
    ${padding};

    &:hover{
        cursor: pointer;
    }
`;

const contactWrapper = css`
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 13px;
    margin: 10px 0;

    &:hover {
        cursor: pointer;
    }
`;

const containerMobile = css`
    border-left: 1px solid var(--gray50);
    border-right: 1px solid var(--gray50);
    border-bottom: 1px solid var(--gray50);
    width: 100%;
`;

const textGray = css` color: var(--gray);`;
const textWhite = css`color: #fff;`;
const arrow = css`fill: var(--gray);`;

export const Sidebar = ({ screenSize, translation, isFileOpen, setIsFileOpen }) => {
    const [isPersonalInfoOpen, setIsPersonalInfoOpen] = useState(true);
    const [isFolderOpen, setIsFolderOpen] = useState(true);
    const [isContactInfoOpen, setIsContactInfoOpen] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const folders = [translation.bio, translation.experience, translation.education];
    const accentColors = ['#E99287', '#3C9D93', '#4D5BCE', "#C98BDF"];
    const contacts = [
        {
            icon: <HiOutlineMail />,
            info: 'dcanonigo17@gmail.com',
            isLink: true,
            linkUrl: 'dcanonigo17@gmail.com',
        },
        {
            icon: <IoLogoLinkedin />,
            info: '/in/david-canonigo/',
            isLink: true,
            linkUrl: "https://www.linkedin.com/in/david-canonigo/"
        },
    ];

  return (
    <>
        {
            screenSize === 'desktop' ?
            <div css={container}>
                <div>
                    <div css={personalInfoWrapper} onClick={() => setIsPersonalInfoOpen(!isPersonalInfoOpen)}>
                        { isPersonalInfoOpen ? <RiArrowDownSFill color="#fff" />  : <RiArrowRightSFill color="#fff" /> }
                        <p>{translation.personal_info}</p>
                    </div>
                    {
                        isPersonalInfoOpen ?
                        <div css={padding}>
                            {
                                folders.map((folder, i) => {
                                    return (
                                        <div 
                                            key={i} 
                                            onClick={() => {
                                                    setActiveIndex(i);
                                                }
                                            }
                                            >
                                            <div css={folderWrapper} >
                                                {   activeIndex === i && isFolderOpen ?
                                                    <RiArrowDownSFill css={arrow} />  
                                                    : <RiArrowRightSFill css={arrow} /> 
                                                }
                                                <AiFillFolder 
                                                    color={accentColors[i]} 
                                                    css={ activeIndex === i ? textWhite 
                                                    : textGray} 
                                                />
                                                <p 
                                                    onClick={() => activeIndex === i ? setIsFolderOpen(!isFolderOpen) : setIsFolderOpen(true)}
                                                    css={ activeIndex === i ? textWhite : textGray}
                                                    >
                                                        {folder}
                                                </p>
                                            </div>
                                            <Files 
                                                activeIndex={activeIndex}
                                                folder={folder} 
                                                isFolderOpen={isFolderOpen}
                                                isFileOpen={isFileOpen}
                                                setIsFileOpen={setIsFileOpen}
                                                translation={translation}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        : null
                    }
                </div>
                <div>
                    <div css={personalInfoWrapper} onClick={() => setIsContactInfoOpen(!isContactInfoOpen)}>
                        { isContactInfoOpen ? <RiArrowDownSFill color="#fff" />  : <RiArrowRightSFill color="#fff" /> }
                        <p>{translation.contacts}</p>
                        
                    </div>
                        <div css={[padding]}>
                            {
                                isContactInfoOpen ? 
                                contacts.map((contact, i) => {
                                    return (
                                        <div css={[contactWrapper, textGray]} key={i}>
                                            {contact.icon}
                                            { contact.isLink ? 
                                                <a 
                                                    href={contact.linkUrl} 
                                                    target="_blank"   
                                                    rel="noreferrer"
                                                    >
                                                        {contact.info}</a> 
                                                :
                                                    <p>{contact.info}</p>}
                                        </div>
                                    )
                                })
                                : null
                            }
                        </div>
                </div>
            </div>
        : 

        <div css={containerMobile}>
                <div>
                    <div css={personalInfoWrapper} onClick={() => setIsPersonalInfoOpen(!isPersonalInfoOpen)}>
                        { isPersonalInfoOpen ? <RiArrowDownSFill color="#fff" />  : <RiArrowRightSFill color="#fff" /> }
                        <p>{translation.personal_info}</p>
                    </div>
                    {
                        isPersonalInfoOpen ?
                        <div css={padding}>
                            {
                                folders.map((folder, i) => {
                                    return (
                                        <div 
                                            key={i} 
                                            onClick={() => {
                                                    setActiveIndex(i);
                                                }
                                            }
                                            >
                                            <div css={folderWrapper} >
                                                {   activeIndex === i && isFolderOpen ?
                                                    <RiArrowDownSFill css={arrow} />  
                                                    : <RiArrowRightSFill css={arrow} /> 
                                                }
                                                <AiFillFolder 
                                                    color={accentColors[i]} 
                                                    css={ activeIndex === i ? textWhite 
                                                    : textGray} 
                                                />
                                                <p 
                                                    onClick={() => activeIndex === i ? setIsFolderOpen(!isFolderOpen) : setIsFolderOpen(true)}
                                                    css={ activeIndex === i ? textWhite : textGray}
                                                    >
                                                        {folder}
                                                </p>
                                            </div>
                                            <Files 
                                                activeIndex={activeIndex}
                                                folder={folder} 
                                                isFolderOpen={isFolderOpen}
                                                isFileOpen={isFileOpen}
                                                setIsFileOpen={setIsFileOpen}
                                                translation={translation}
                                            />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        : null
                    }
                </div>
                <div>
                    <div css={personalInfoWrapper} onClick={() => setIsContactInfoOpen(!isContactInfoOpen)}>
                        { isContactInfoOpen ? <RiArrowDownSFill color="#fff" />  : <RiArrowRightSFill color="#fff" /> }
                        <p>{translation.contacts}</p>
                    </div>
                            {
                                isContactInfoOpen ? 
                                contacts.map((contact, i) => {
                                    return (
                                        <div css={[padding]} key={i}>
                                            <div css={[contactWrapper, textGray]} key={i}>
                                                {contact.icon}
                                                { contact.isLink ? 
                                                    <a 
                                                        href={contact.linkUrl} 
                                                        target="_blank"   
                                                        rel="noreferrer"
                                                        >
                                                            {contact.info}</a> 
                                                    :
                                                        <p>{contact.info}</p>}
                                            </div>
                                        </div>
                                    )
                                })
                                : null
                            }
                </div>
            </div>
        }
    </>
  )
}
