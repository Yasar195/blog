import { createGlobalStyle } from "styled-components"


export const lightTheme =  {
    background: '#f1f5f9',
    text: '#363537',
    border: '#363537',
}

export const darkTheme = {
    background: '#1c1917',
    text: '#f1f5f9',
    border: '#f1f5f9',
}

export const GlobalStyles = createGlobalStyle`
    body{
        background: ${({ theme }) => theme.background};
        color: ${({ theme }) => theme.text};
        transition: all 0.5s linear;
    }

    .brd{
        border-color: ${({ theme }) => theme.border};
    }
`