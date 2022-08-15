import styled from "styled-components";

const Header = styled.header`
  padding: 1rem 0;
  background: #001e32;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  h1 {
    color: #fff;
  }
  button {
    font-family: Montserrat, sans-serif;
    font-weight: 600;
    font-size: 1.2rem;

    background: transparent;
    border: 2px solid #fff;
    color: #fff;

    padding: 0 2rem;
    height: 48px;

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

export default Header;
