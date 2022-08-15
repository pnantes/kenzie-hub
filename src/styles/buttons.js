import styled, { css } from "styled-components";

export const ThemeButton = styled.button`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;

  //Tamanhos
  ${(props) => {
    switch (props.buttonSize) {
      case "large":
        return css`
          padding: 0 3rem;
          height: 48px;
        `;
      case "small":
        return css`
          padding: 0 2rem;
          height: 41px;
          @media (min-width: 1024px) {
            padding: 0 3rem;
            height: 52px;
          }
        `;
      default:
        return false;
    }
  }}
  //Estilos
  ${(props) => {
    switch (props.buttonStyle) {
      case "solid":
        return css`
          color: var(--White);
          background: var(--Blue);
          border: 1px solid var(--Blue);
          &:hover {
            filter: brightness(1.1);
          }
        `;
      case "outline":
        return css`
          color: #f8f9fa;
          background: #212529;
          border: 1px solid #212529;
          &:hover {
            background: #343b41;
          }
        `;
      default:
        return false;
    }
  }}
`;
