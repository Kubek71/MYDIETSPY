import styled from "styled-components";

export const DiaryStyled = styled.div`
margin-top: 2rem;
max-width: 800px;
h2 {
    display: block;
    text-align: center;
    padding: 0.5rem 2rem;
    letter-spacing: 0.25rem;
    font-family: roboto;
    color: #10C8C2;
    border-bottom: 2px solid #EE6C45;
}

.meal-box {
    -webkit-box-shadow: 0px 2px 6px 0px rgba(68, 68, 74, 1);
    -moz-box-shadow: 0px 2px 6px 0px rgba(68, 68, 74, 1);
    box-shadow: 0px 2px 6px 0px rgba(68, 68, 74, 1);
    width: 80%;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #FFCE61;
    border-radius: 0.5rem;
    margin: 0 auto;

    table {
        color: #fff;
        font-family: roboto;
        text-transform: uppercase;
        text-align: left;
        padding 1rem;

        thead {
            color: #65458C;
        }
        td {
            padding: 0 1rem;
            
            strong {
                color: #10C8C2
            }
        }
    }
}
`