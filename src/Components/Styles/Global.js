import { createGlobalStyle } from 'styled-components' 
import styled from 'styled-components'

export const GlobalStyles = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}


html,body, #root {
    min-height: 100vh;
}

.App {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
}

img { 
    max-width: 100%;
}
input {
    border: none;
    border-bottom: 2px solid #fff;
}

a {
    transition: transform 300ms ease;
}

a:hover, a:focus {
    transform: scale(1.1);
}

`
export const Text = styled.span`
font-family: roboto;
text-align: center;
font-size: 1rem;
letter-spacing: 0.100rem;
`
export const Button = styled.button`

    &:hover,:focus{
    cursor: pointer;
    }

        background: #10C8C2;
        color: #fff;
        font-family: roboto;
        text-align: center;
        letter-spacing: 0.100rem;
        border: none;
        color: #fff;
        border-radius: 0.25rem; 
        padding: 0.5rem;
        -webkit-box-shadow: 2px 3px 5px -3px rgba(38, 38, 38, 1);
        -moz-box-shadow: 2px 3px 5px -3px rgba(38, 38, 38, 1);
        box-shadow: 2px 3px 5px -3px rgba(38, 38, 38, 1);

        
    

`


