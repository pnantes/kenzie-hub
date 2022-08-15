import styled from "styled-components";
import { css } from "styled-components";

export const Header = styled.header`
  display: flex;
  padding: 1rem 0;
  width: 100%;
  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 1rem;
    gap: 2rem;
    max-width: 300px;

    margin: 0 auto;
    width: 100%;
    /* ${(props) => {
      switch (props.pageName) {
        case "login":
          return css`
            margin: 0 auto;
            width: 100%;
            justify-content: center;
          `;
        case "register":
          return css`
            margin: 0 auto;
            width: 100%;
          `;
        default:
          return false;
      }
    }} */
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
