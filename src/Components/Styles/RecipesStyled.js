import styled from "styled-components";

export const RecipesStyled = styled.div`
  margin-top: 2rem;
  max-width: 1400px;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  padding: 3rem;
  color: black;
  color: #737373;
  font-family: "Varela Round", sans-serif;

  @media (max-width: 768px) {
    background-color: #65458c;
    color: white;
    width: 100%;
    margin: 0;
    flex-direction: column;
    align-items: center;
    padding: 0;
    height: 100%;
    width: 100%;
  }
  h2 {
    display: block;
    text-align: center;
    padding: 0.5rem 2rem;
    letter-spacing: 0.25rem;
    font-family: roboto;
    color: #10c8c2;
  }

  section {
    width: 50%;
    display: flex;
    flex-direction: column;
    .form-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 2rem 0;
    }
    div {
      width: 100%;
      padding: 1rem;
      flex-direction: column;
      align-items: center;
      form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 2rem 0;
        gap: 1rem;

        .result-box {
          width: 100%;
          align-items: flex-start;
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
        }

        div {
          padding: 0 0.5rem;
          display: block;
          width: 100%;

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
      }
    }
    .summary-span {
      margin-top: 2rem;
    }
  }
`;
