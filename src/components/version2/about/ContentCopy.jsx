// import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

const container = css`
    padding: 0 30px;
    color: var(--gray);
    font-size: 15px;
    line-height: 1.5;
`;

const p = css`
    padding-bottom: 1rem;
`;

const h4 = css`
    color: var(--reactColor);
    margin-bottom: 15px;
`

// const linesAndStars = css`
//     display: flex;
//     gap: 30px;
// `;

// const padding05 = css`padding-left: 0.5rem;`

export const ContentCopy = ({ content, isFileOpen, screenSize, lang }) => {
    // const [numberOfLines, setNumberOfLines] = useState(0);

    // useEffect(() => {
    //     const el = document.querySelector("#content-span");
    //     const style = window.getComputedStyle(el, null).getPropertyValue('font-size');
    //     const fontSize = parseFloat(style); 
    //     const lineHeight = Math.floor(fontSize * 1.5);
    //     const height = el.clientHeight;
    //     setNumberOfLines(Math.ceil(height / lineHeight));
    // }, [content]);

    // let codeExampleOfHowToGetNumberOfLines = `
    //     <div>
    //         {Array.from(Array(numberOfLines), (e, i) => {
    //             return (
    //                 <div css={linesAndStars}>
    //                     <p key={i}>{i + 1}</p>
    //                     <span css={i !== 0 && i < 9 ? padding05 : null}>
    //                         {i === 0 ? '/**' : i === (numberOfLines - 1) ? '*/' : '*'} {i === 0 ? <br /> : null}
    //                     </span>
    //                 </div>
    //             )
    //         })}
    //     </div>
    // `

    const h2 = css`
        font-size: 30px;
        color: #fff;
        margin-bottom: 5px;
        padding-bottom: 5px;
        border-bottom: 1px solid var(--gray50);
    `;

    const skills = [
        'AGILE/SCRUM', 
        'React', 'Vue JS', 
        'Javascript/JSON/jQuery', 
        'REST/RESTFUL API', 
        'PHP', 
        'Laravel', 
        'Figma', 
        'SQL/MySQL',
        'Git/Github',
        'Jira/Bitbucket/Sourcetree',
        'HTML/HTML5',
        'SASS/SCSS/CSS/CSS3',
        'Boostrap',
        'Adobe Photoshop',
        'E-commerce',
        content.immense_ability,
        content.fluent,
    ];

    const h3 = css`
        font-size: 17px;
        color: white;
        margin-top: 5px;
    `;

    const h4 = css`
        color: var(--reactColor);
        margin-bottom: 15px;
    `


    const copyWrapper = css`
        display: grid;
        grid-template-columns: ${screenSize === 'desktop' ? '1fr 1fr' : '1fr'};

        p {
            margin-bottom: ${lang === 'es' || lang === 'pt' ? '10px' : null};
            padding-right: ${lang === 'es' || lang === 'pt' ? '20px' : null};
            font-size: ${lang === 'es' || lang === 'pt' ? '13px' : null};
        }
    `;

  return (
    <div css={container}>
        <div>
            <h2 css={h2}>
                {
                    isFileOpen === (content.personal_info + '.md')? `📖 ${content.about_me}` :
                    isFileOpen === (content.resume + '.md')? content.resume :
                    isFileOpen === (content.skills + '.md')? `🛠️ ${content.skills}` :
                    isFileOpen === (content.college + '.md')? `🏛️ ${content.college}` :
                    isFileOpen === (content.bootcamp + '.md')? `📚 ${content.bootcamp}` : null
                }
            </h2>
            <div id="content-span">
                {
                    isFileOpen === (content.personal_info + '.md')  ?
                        <div>
                            <p css={p}>{content.personal_info_copy}</p>
                            <p css={p}>{content.personal_info_copy2}</p>
                            <p css={p}>{content.personal_info_copy3}</p>
                            <p css={p}>{content.personal_info_copy4}</p>
                            <p css={p}>{content.personal_info_copy5}</p>
                        </div>
                    : isFileOpen === (content.resume + '.md')  ?
                        <div css={copyWrapper}>  
                            <div>
                                <h3 css={h3}>{content.job_title}</h3>
                                <h4 css={h4}>Bonterra | 2022 - Present</h4>
                                <p>- {content.bonterra1}</p>
                                <p>- {content.bonterra2}</p>
                                <p>- {content.bonterra3}</p>
                                <p>- {content.bonterra4}</p>
                            </div>
                            <div>
                                <h3 css={h3}>{content.fullstack}</h3>
                                <h4 css={h4}>Stridek | 2021 - 2022</h4>
                                <p>- {content.stridek1}</p>
                                <p>- {content.stridek2}</p>
                                <p>- {content.stridek3}</p>
                                <p>- {content.stridek4}</p>
                            </div>
                            <div>
                                <h3 css={h3}>{content.job_title}</h3>
                                <h4 css={h4}>EverCommerce | 2020 - 2021</h4>
                                <p>- {content.everco1}</p>
                                <p>- {content.everco2}</p>
                                <p>- {content.everco3}</p>
                            </div>
                            <div>
                                <h3 css={h3}>{content.job_title}</h3>
                                <h4 css={h4}>C.E. Hutton | 2019 - 2019</h4>
                                <p>- {content.ce1}</p>
                                <p>- {content.ce2}</p>
                                <p>- {content.ce3}</p>
                            </div>
                        </div>
                    :
                    isFileOpen === (content.college + '.md')  ?
                        <div>
                            <h3 css={h3}>St. Petersburg College</h3>
                            <h4 css={h4}>{content.associate}</h4>
                        </div>
                 :
                    isFileOpen === (content.skills + '.md')  ?
                        <div>
                            <ul>
                                {
                                    skills.map((skill, i) => {
                                        return <li key={i}>* {skill}</li>
                                    })
                                }
                            </ul>
                        </div>
                 :
                    isFileOpen === (content.bootcamp + '.md')  ?
                    <div>
                        <h3 css={h3}>{content.flag}</h3>
                        <h4 css={h4}>{content.flag_grad}</h4>
                    </div>
                    : null
                }
            </div>
        </div>
    </div>
  )
}

ContentCopy.propTypes = {
    content: PropTypes.object,
};