import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;
  gap: 2rem;
  max-width: 70%;

  margin: 0 auto;
  width: 100%;

  font-family: "inter", sans-serif;
  color: white;

  h1 {
    font-size: 1.125rem;
    font-weight: 700;
    margin: 2rem 0;
  }

  p {
    font-size: 1rem;
    font-weight: 400;
    margin: 1rem 0;
  }

  h5 {
    font-size: 0.75rem;
    font-weight: 60;
    color: #868e96;
  }

  @media (min-width: 890px) {
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 0 40px;

    button {
      min-width: 25%;
    }
  }
`;
