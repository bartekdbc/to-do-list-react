import styled from "styled-components";

export default styled.input`
  padding: 10px;
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 100%;
    margin-right: 0px;
  }

  &:focus {
    border: 2px solid ${({ theme }) => theme.color.black};
    border-radius: 3px;
  }
`;