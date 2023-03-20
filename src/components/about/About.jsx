import { useContext } from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { ThemeContext } from '../../App';

const parentStyle = css`
    min-height: 100vh;
    background-color: var(--darkGreen);
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1024px){
        min-height: 60vh;
        flex-direction: column;
        padding: 10px 0;
    }
`;

const leftBox = css`
    background-color: var(--lightGreen);
    width: 50%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        color: #fff;
        font-size: 35px;
        line-height: 50px;
    }

    @media screen and (max-width: 1024px){
        min-height: 250px;
        width: 90%;
    }
`;

const divider = css`
    width: 100px;
    height: 3px;
    background-color: #fff;
    margin: 30px 0;
`;

const rightBox = css`
    width: 50%;
    padding: 0 50px;

    p {
        color: #fff;
        line-height: 3rem;
        font-size: 25px;

        @media screen and (max-width: 1024px){
            font-size: 15px;
            line-height: initial;
        }
    }

    @media screen and (max-width: 1024px){
        width: 100%;
        padding: 30px 10px;
        margin-top: 30px;
    }
`;

export const About = () => {
    const lang = useContext(ThemeContext);

  return (
    <div css={parentStyle} id="about">
        <div css={leftBox}>
            <div css={divider}></div>
            <h2>
                {lang === 'en' ? 'Who' : lang === 'es' ? 'Quién' : 'Quem'} 
                <br />
                {lang === 'en' ? 'Am' : lang === 'es' ? 'Soy' : 'Sou'} 
                <br />
                {lang === 'en' ? 'I' : lang === 'es' ? 'Yo' : 'Eu'} 
            </h2>
        </div>
        <div css={rightBox}>
            <p>{lang === 'en' ? 'The most handsome developer — according to my mum.' : lang === 'es' ? 'El desarrollador más guapo del mundo, según mi madre.' : 'O desenvolvedor mais bonito do mundo - de acordo com minha mãe.'}</p> 
            <br />
            <p>{
                lang === 'en' ? `I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences. I care deeply about building interfaces that are usable and
                pleasant for the most number of people possible.` : 
                lang === 'es' ? `Disfruto crear cosas que viven en la Internet, sean ellas sitios web, aplicaciones o una mezcla. Mi objetivo es crear siempre productos que brinden experiencias perfectas y de alto rendimiento. Me preocupo mucho por construir interfaces que sean utilizables y agradable para el mayor número de personas posible.` 
                : `Gosto de criar coisas que vivem na Internet, sejam elas sites, aplicativos ou uma mistura. Meu objetivo é sempre criar produtos que forneçam experiências perfeitas e de alto desempenho. Eu me preocupo profundamente em construir interfaces que sejam utilizáveis ​​e
                agradável para o maior número de pessoas possível.`
            }</p> 
            <br />
            <p>{
                lang === 'en' ? 'Something that I like to say is that at the end of the day we work with people and deliver products to people.' : 
                lang === 'es' ? 'Algo que me gusta decir es que al final del día trabajamos con personas y entregamos productos a personas.' : 
                'Algo que gosto de dizer é que, no final das contas, trabalhamos com pessoas e entregamos produtos para pessoas.'
            }</p> 
        </div>
    </div>
  )
}
