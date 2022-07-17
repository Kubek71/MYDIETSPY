import styled from  'styled-components'

export const StyledHeader = styled.header`
    background: #50366F;
    width: 100%;

    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 1fr));


    logo-box, nav-box {
        padding: 1.5rem 0;
        align-self: center;
    }

    .nav-link {
        color: white;
        text-decoration: none;
        font-family: roboto;
        text-transform: uppercase;
        text-align: center;
        font-size: 1rem;
        letter-spacing: 0.5rem;
        padding: 0 2.5rem;
    }

    img {
        max-width: 50%;
        min-width: 128px
    }


        
    @media (max-width: 768px) {
        grid-template-columns: none;
        justify-items: center;
        align-items: center;
    }
`