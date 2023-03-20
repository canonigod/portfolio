import { useContext } from 'react';

/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { ThemeContext } from '../../App';

import { BsLinkedin } from "react-icons/bs";

const parentStyle = css`
  position: absolute;
  margin: 10px auto;
  padding: 30px 0 90px;
  left: 0;
  right: 0;
  top: -50%;
  border-radius: 10px;
  background: white;
  min-height: 350px;
  width: 60%;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

  @media screen and (max-width: 767px){
    width: 100%;
  }
  
  @media screen and (max-width: 1024px){
    width: 98%;
  }
  
  @media screen and (max-width: 2000px){
    width: 70%;
    top: -30%;
  }
`;

const wrapperStyles = css`
  display: flex;
  justify-content: center;
  align-content: center;

  @media screen and (max-width: 767px){
    flex-direction: column;
    padding: 0 25px;
  }
`;

const pageTitle = css`
  position: relative;
  line-height: 1;
  margin: 0 0 50px;
  padding-left: 75px;
  color: var(--lightGreen);

  &:after{
      content: "";
      height: 3px;
      left: 2%;
      position: absolute;
      top: calc(50% - 1.5px);
      width: 35px;
      background-color: var(--lightGreen);
  }
`;

const positionRelative = css`position: relative;`;

const labelInputStyles = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-right: 100px;
`;

const inputStyles = css`
  border: 1px solid var(--lightGreen);
  border-radius: 10px;
  padding: 10px 10px;
  width: 300px;

  &::placeholder{
    color: var(--lightGreen);
    opacity: 1; /* Firefox */
  }
`;

const btnStyles = css`
  padding: 10px 50px;
  margin-top: 10px;
  background: var(--lightGreen);
  border: 1px solid var(--lightGreen);
  border-radius: 50px;
  color: #fff;
  transition: ease-in-out .2s;

  &:hover {
    background: transparent;
    color: var(--lightGreen);
    cursor: pointer;
  }
`;

const h2Styles = css`
  font-size: 50px;
  margin-bottom: 30px;

  @media screen and (max-width: 1024px){
    font-size: 35px;
    margin-top: 50px;
  }
`;

const linkedinLinkStyle = css`
  display: flex;
  align-items: center;
  font-size: 25px;
  margin-bottom: 10px;

  @media screen and (max-width: 1024px){
    font-size: 20px;
  }
`;

const linkedinIconStyle = css`
  font-size: 30px;
  color: var(--lightGreen);
  margin-left: 5px;

  &:hover{
    color: var(--darkGreen);
  }
`;

const emailStyle = css`
  font-size: 25px;

  @media screen and (max-width: 1024px){
    font-size: 20px;
  }
`;

const emailLinkStyle = css`
  font-size: 25px;
  color: var(--lightGreen);

  &:hover{
    color: var(--darkGreen);
  }

  @media screen and (max-width: 1024px){
    font-size: 20px;
  }
`;


export const Contact = () => {
    const lang = useContext(ThemeContext);

  return (
    <div css={parentStyle}>
      <div>
        <span css={positionRelative}><p css={pageTitle}>{lang === 'en' ? 'Contact' : 'Contacto'}</p></span>
      </div>
      <div css={wrapperStyles}>
        <div>
          <form
            action="https://formspree.io/f/mnqlakyl"
            method="POST"
          >
            <div css={labelInputStyles}>
              <label>
                  <input css={inputStyles} type="name" name="name" placeholder={lang === 'en' ? 'Name' : lang === 'es' ? 'Nombre' : 'Nome'} required/>
              </label>
              <label>
                  <input css={inputStyles} type="email" name="_replyto" placeholder="Email" required/>
              </label>
              <label>
                  <textarea css={inputStyles} name="message" rows="4" cols="50" placeholder={lang === 'en' ? 'Message' : lang === 'es' ? 'Mensaje' : 'Mensagem'}></textarea>
              </label>
            </div>
            <button css={btnStyles} type="submit">{lang === 'en' ? 'Send' : 'Enviar'}</button>
          </form>
        </div>
        <div>
          <h2 css={h2Styles}> <span>👋 </span>{lang === 'en' ? 'Get in touch!' : lang === 'es' ? '¡Contáctame!' : 'Entre em contacto'}</h2>
          <p css={linkedinLinkStyle}>{lang === 'en' ? 'Connect with me:' : lang === 'es' ? 'Conectate conmigo:' : 'Adicione-me no:'} <a href="https://www.linkedin.com/in/david-canonigo" target="_blank" rel="noreferrer" css={linkedinIconStyle}><BsLinkedin /></a></p>
          <p css={emailStyle}>Email: <a href="mailto:dcanonigo17@gmail.com" rel="noreferrer" target="_blank" css={emailLinkStyle}>dcanonigo17@gmail.com</a></p>
        </div>
      </div>
    </div>
  )
}
