import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 750px;

  input,
  select {
    margin: 7px 0 7px 0;
    height: 25px;
    border-radius: 4px;
    border: none;
    background-color: #343b41;
    color: #868e96;
  }

  input:focus {
    color: #f8f9fa;
    border: 1px solid #f8f9fa;
  }

  button {
    width: 250px;
    height: 30px;
    margin-top: 15px;
    color: #ffffff;
  }
`;

export default Form;
