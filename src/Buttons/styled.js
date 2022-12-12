import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.color.teal};
  border: none;
  font-size: 18px;
  text-align: center;
  max-height: 40px;
  cursor: pointer;
  transition: color 0.3s;

  @media (max-width: ${({theme}) => theme.breakpoint.mobileMax}px) {
    flex-basis: 100%;
    margin: 10px;
  }

  &:hover {
    color: ${({ theme }) => theme.color.bondiBlue};
  }

  &:active {
    color: ${({ theme }) => theme.color.blue};
  }

  &:disabled {
    color: ${({ theme }) => theme.color.silver};
    cursor: not-allowed;
  }
`;
