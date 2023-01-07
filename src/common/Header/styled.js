import styled from "styled-components";

export const Title = styled.h1`
  margin: 20px 0 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    text-align: center;
  }
`;
