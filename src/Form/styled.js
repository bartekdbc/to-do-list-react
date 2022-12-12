import styled from "styled-components";

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 20px;
  padding: 20px;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export const FormField = styled.input`
  padding: 10px;
  color: black;

  @media (max-width: 767px) {
    width: 100%;
    margin-right: 0px;
  }

  &:focus {
    border: 2px solid black;
    border-radius: 3px;
  }
`;

export const FormButton = styled.button`
  background-color: hsl(187, 100%, 25%);
  color: #ffffff;
  padding: 10px;
  border: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: hsl(187, 100%, 30%);
    transform: scale(1.05);
  }

  &:active {
    background-color: hsl(187, 100%, 35%);
    outline: 1px solid black;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;
