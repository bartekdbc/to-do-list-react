import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  background: transparent;
  color: hsl(187, 100%, 25%);
  border: none;
  font-size: 18px;
  text-align: center;
  max-height: 40px;
  cursor: pointer;
  transition: color 0.3s;

  @media (max-width: 767px) {
    flex-basis: 100%;
    margin: 10px;
  }

  &:hover {
    color: hsl(187, 100%, 35%);
  }

  &:active {
    color: hsl(187, 100%, 45%);
  }

  &:disabled {
    color: hsl(0, 4%, 65%);
    cursor: not-allowed;
  }
`;
