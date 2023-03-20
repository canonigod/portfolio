import { useState, useEffect, useRef } from 'react'
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

import { motion } from "framer-motion"

const parentStyle = css`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 80px;
        color: var(--lightGreen);
    }
`;

export const Greetings = () => {
    const greetingText = [
        'Hello',
        'Olá',
        'Hola',
        'Ciao',
        'Bonjour',
        'Hallo',
        'Hallå',
    ]
    const [count, setCount] = useState(0);
    const myInterval = useRef();
    
    useEffect(() => {
        return () => clearInterval(myInterval.current);
    }, []);

    useEffect(() => {
        if (count <= 6) {
          myInterval.current = setInterval(
            () => setCount(prev => prev + 1),
            1000
          );
        } else {
            clearInterval(myInterval.current);
            myInterval.current = null;
            setCount(0);;
        }
      },);

  return (
    <div css={parentStyle}>
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: {
                    scale: .8,
                    opacity: 0
                },
                visible:{
                    scale: [1, 2.4, 2],
                    roate: [0, 10, -10, 0],
                    opacity: 1,
                    transition: {
                        delay: .4
                    }
                }
            }}
        >
            <h1>{greetingText[count]}</h1>
        </motion.div>
    </div>
  )
}
