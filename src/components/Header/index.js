import styled from "styled-components";
import { css } from "styled-components";

export const Header = styled.header`
  display: flex;
  padding: 1rem 0;
  width: 100%;

  ${(props) => {
    switch (props.pageName) {
      case "login":
        return css`
          margin: 0 auto;
          width: 50%;
          justify-content: center;
        `;
      default:
        return false;
    }
  }}

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 1rem;
    gap: 2rem;
    max-width: 30%;

    margin: 0 auto;
    width: 100%;
  }

  button {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 1rem;

    background: #212529;
    border: none;
    color: #fff;
    border-radius: 4px;

    padding: 0 1rem;
    height: 40px;

    transition: 0.3s;
  }

  button:hover {
    background: #fff;
    color: #001e32;
  }

  @media (max-width: 420px) {
    div {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;

export const ContainerCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;

export const Nav = styled.nav`
  button {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 1rem;

    background: #212529;
    border: none;
    color: #fff;
    border-radius: 4px;

    padding: 0 1rem;
    height: 40px;

    transition: 0.3s;
  }

  button:hover {
    background: #fff;
    color: #001e32;
  }
`;
