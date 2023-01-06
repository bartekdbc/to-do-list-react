import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.color.teal};
  border: none;
  font-size: 18px;
  text-align: center;
  max-height: 40px;
  cursor: pointer;
  transition: filter 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-basis: 100%;
    margin: 10px;
  }

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;
