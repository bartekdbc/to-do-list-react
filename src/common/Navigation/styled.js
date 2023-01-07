import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.color.teal};
`;

export const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0px;
  margin: 0;
`;

export const Li = styled.li`
  padding: 10px 20px;
`;
