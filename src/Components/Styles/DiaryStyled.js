import styled from "styled-components";

export const DiaryStyled = styled.div`
  margin-top: 2rem;
  max-width: 1200px;
  .main {
    flex-direction: row;
    align-items: flex-start;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
    section {
      width: 50%;
      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
  .date-picker {
    display: block;
    padding: 0.5rem 0;
    text-align: center;
    letter-spacing: 0.125rem;
    font-size: 1.5rem;
    font-weight: 600;
    font-family: roboto;
    color: #10c8c2;
    background-color: #65458c;
    border-radius: 16px;
    margin: 0 auto;
  }
  .summary-container {
    display: block;
    font-family: "Varela Round", sans-serif;

    h3 {
      display: block;
      text-align: center;
      padding: 2rem 1rem;
      color: #ffce61;
      font-size: 2rem;
    }
    span {
      font-size: 4rem;
      display: block;
      text-align: center;
      color: #fff;
      background-color: #10c8c2;
      border-radius: 0.5rem;
      padding: 2rem 1rem;
      -webkit-box-shadow: 0px 2px 6px 0px rgba(68, 68, 74, 1);
      -moz-box-shadow: 0px 2px 6px 0px rgba(68, 68, 74, 1);
      box-shadow: 0px 2px 6px 0px rgba(68, 68, 74, 1);
      strong {
        display: block;
        color: #65458c;
      }
    }
  }

  .meals-container {
    display: block;

    .meal-number {
      display: block;
      text-align: center;
      padding: 0.5rem 2rem;
      font-weight: 900;
      font-family: roboto;
      color: #ee6c45;
    }

    .meal-summary {
      display: block;
      text-align: center;
      padding: 0.5rem 2rem;
      font-weight: 900;
      font-family: roboto;
      padding: 1rem;
      color: #65458c;
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
    background-color: #ffce61;
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
        color: #65458c;
      }
      td {
        padding: 0 1rem;

        strong {
          color: #10c8c2;
        }
      }
    }
  }
`;
