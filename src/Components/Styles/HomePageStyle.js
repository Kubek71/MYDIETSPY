import styled from "styled-components";

export const HomePageStyled = styled.div`

min-width: 100%;
min-height: 100%;
flex: 1 1 auto;
color: #737373;
font-family: 'Varela Round', sans-serif;

@media (max-width: 768px) {
    background-color: #65458C;
    color: white;
}

h1 {
    display: block;
    text-align: center;
    padding: 2rem 0;
    color: #EE6C45;
    margin-top: 2rem;
}

.form-container {
    height: 100%;
    margin: 0 auto;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
    border-radius: 1rem;   

    .newMeal-button {
        padding: 1rem;
        max-width: 128px;
        margin-bottom: 2rem;
    }
    
    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        padding: 2rem 0;
        gap: 1rem;
        .result-box {
            width: 100%;
            align-items: flex-start;
            margin-top: 1px;
            background: #fff;
            -webkit-box-shadow: 0px 5px 5px -1px rgba(66, 68, 90, 1);
            -moz-box-shadow: 0px 5px 5px -1px rgba(66, 68, 90, 1);
            box-shadow: 0px 5px 5px -1px rgba(66, 68, 90, 1);
            button {
                max-width: 128px;
                background: none;
                border: none;
                color: black;
                text-align: left;
                cursor: pointer;
                padding: 0.5rem 0;
                display: block;
            }
            margin-bottom: 2rem;
        }

        div{
            padding: 0 0.5rem;
            flex-direction: column;

            label {
                display: block;
                text-align: center;
                text-transform: uppercase;
                padding: 0.5rem 0;
                font-weight: 700;
            }
        }
        input {
            padding: 0.5rem;
            width: 100%;
            background: #fff;
            border-bottom: 2px solid #262626;            
        }

        button {
            width: 100%;
        }
    }
}
`