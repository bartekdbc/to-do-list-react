import styled from "styled-components";

export const Button = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.color.teal};
  border: none;
  font-size: 16px;
  text-align: center;
  max-height: 40px;
  cursor: pointer;
  transition: filter 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    flex-basis: 100%;
    margin-top: 20px;
  }

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }

  &:disabled {
    color: ${({ theme }) => theme.color.silver};
    cursor: not-allowed;
  }
`;
