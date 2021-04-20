import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ${() => cssReset}
`

const cssReset = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html,
    body,
    input,
    textarea,
    button {
        font: 500 1rem sans-serif;
        background: ${(props) => props.theme.colors.darker};
        color: ${(props) => props.theme.colors.white};
    }

    @media (max-width: 800px) {
        html {
            font-size: 95%;
        }
    }

    @media (max-width: 480px) {
        html {
            font-size: 90%;
        }
    }

    h1 {
        font-size: 2rem;
    }

    h2 {
        font-size: 1.5rem;
    }

    button {
        cursor: pointer;
        height: 2rem;
        width: 2rem;
        background: ${(props) => props.theme.colors.primary};
        border: none;
        border-radius: 0.75rem;
        transition: 0.5s;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover {
            filter: brightness(80%);
        }
    }
`
