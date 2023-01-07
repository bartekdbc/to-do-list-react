import { NavLink } from "react-router-dom";
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
  font-size: 18px;
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName: "active",
}))`
  text-decoration: none;
  color: ${({ theme }) => theme.color.white};

  &.active {
    font-weight: 700;
  }

  &:hover {
    border-bottom: 1px solid;
  }
`;
