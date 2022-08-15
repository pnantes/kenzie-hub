import styled, { css } from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    color: #f8f9fa;
  }

  input,
  select {
    height: 3rem;
    width: 20rem;
    padding: 0 1rem;
    margin: 1rem 0;

    border-radius: 4px;
    background-color: #343b41;
    border: none;

    color: #868e96;
    font-weight: 400;
    font-size: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  input:focus,
  select:focus {
    color: #f8f9fa;
    border: 1px solid #f8f9fa;
  }
`;

export const TitleForm = styled.h2`
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 1.125rem;
  color: #f8f9fa;

  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

export const P = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 0.75rem;
  color: #868e96;
`;

export const SubTitle = styled.h4`
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 0.75rem;
  color: #868e96;
  padding-bottom: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LargeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10.15px;

  height: 3rem;
  width: 20rem;
  padding: 0 1rem;
  margin: 1rem 0;
  border-radius: 4px;

  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1rem;

  ${(props) => {
    switch (props.buttonStyle) {
      case "login":
        return css`
          background-color: #ff577f;
          color: #ffffff;
          &:hover {
            background-color: #ff427f;
          }
        `;
      case "signup":
        return css`
          background-color: #868e96;
          color: #f8f9fa;
          &:hover {
            background-color: #343b41;
          }
        `;

      case "sign":
        return css`
          background-color: #59323f;
          color: #ffffff;
          &:hover {
            background-color: #868e96;
          }
        `;
      default:
        return false;
    }
  }}
`;
