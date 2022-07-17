import styled from "styled-components";

export const ProductBox = styled.div`

width: 100%;
height: auto;
margin: 0 auto;
padding: 3rem;
display: flex;
gap: 1rem;
flex-direction: column;
justify-content: center;
@media (min-width: 768px) {
    flex-direction: row;

    flex-wrap: wrap;

}



span {
    color: #65458C;
    display: block;
    text-align: center;
    grid-column: 3 / 1;
}

div {
        @media (min-width: 768px) {
            flex-direction: column;
            padding: 1rem;
        }
        justify-content: space-evenly;
    gap: 0.5rem;
    background-color: #FFCE61;
    border-radius: 12px;
    padding: 0.5rem;

    h3 {
        color: #65458C;
        font-family: roboto;
        text-align: center;
        font-size: 1rem;
        letter-spacing: 0.100rem;
    }
    span {
        color: #fff;
    }
    

}
`