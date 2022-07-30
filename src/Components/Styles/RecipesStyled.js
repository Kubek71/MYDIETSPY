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
  .hidden {
    display: none;
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
    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .recipes-box {
    .meals-container {
      display: block;

      .meal-number {
        display: block;
        margin: 0 auto;
        text-align: center;
        padding: 0.5rem 2rem;
        font-weight: 900;
        font-family: roboto;
        color: #262626;
      }

      .meal-summary {
        display: block;
        text-align: center;
        padding: 0.5rem 2rem;
        font-weight: 900;
        font-family: roboto;
        padding: 1rem;
        color: #ffce61;
        border-bottom: 2px solid #ee6c45;
        max-width: 360px;
        margin: 0 auto;
        strong {
          color: #10c8c2;
        }
      }
    }
    .meal-box {
      -webkit-box-shadow: 0px 2px 6px 0px rgba(68, 68, 74, 1);
      -moz-box-shadow: 0px 2px 6px 0px rgba(68, 68, 74, 1);
      box-shadow: 0px 2px 6px 0px rgba(68, 68, 74, 1);
      width: 80%;
      justify-content: flex-start;
      align-items: flex-start;
      background-color: #65458c;
      border-radius: 0.5rem;
      margin: 0 auto;

      table {
        color: #fff;
        font-family: roboto;
        text-transform: uppercase;
        text-align: left;
        padding: 1rem;
        width: 100%;

        thead {
          color: #ffce61;
        }
        td {
          padding: 0 1rem;

          strong {
            color: #10c8c2;
          }
        }
      }
    }
  }

  .form-section {
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
        width: 80%;

        #recipe-name {
          margin-bottom: 4rem;
        }

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
