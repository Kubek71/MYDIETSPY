import styled from "styled-components";


export const LandingPageStyled = styled.main`

    min-width: 100%;
    min-height: 100vh;
    background-image: url('https://images.unsplash.com/photo-1611077543693-a0194a16b034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2012&q=80');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    form {
        .input-box {
            flex-direction: column;
            align-items: flex-start;
            max-width: 400px;

            button {
                padding: 0.75rem;
            }
        }
        input { 
            padding: 0.75rem;
            width: 100%;
            background: #fff;
            margin: 0.5rem 0;
            border-radius: 8px;  
        }
    }

    img {
        margin-top: 6rem;
        margin-right: 4rem;
        max-width: 660px;
    }

    .text-container {
        background-color: rgba(249, 244, 220);
        max-width: 800px;
        border-radius: 0.75rem;
        margin: 2rem 0;
        flex-direction: column;
        align-items: flex-start;
        padding: 1rem;
    }

    h2 {
        display: block;
        text-align: left;
        font-size: 2.25rem;
        color: #fff;
        font-family: 'Varela Round', sans-serif;
        margin: 1.5rem 0;

    }
    span {
        display: block;
        text-align: left;
        font-size: 2rem;
        color: #65458C;
        font-family: 'Varela Round', sans-serif;
        /* text-shadow: 3px 2px 3px rgba(255, 255, 246, 0.8); */
        text-transform: uppercase;
        font-weight: bold;
    }

    .button-container {
        width: 100%;
        justify-content: flex-start;
    }
    button {
        display: block;
        padding: 1.5rem;
        font-size: 1.5rem;
        margin-right: 1.5rem;
    }

    @media (max-width: 768px) {
        span {
            font-size: 1.5rem;
        }
        background-image: url('https://i.ibb.co/bg5y3wc/getstartedimagemobile.jpg');
    }

`