import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  width: 100%;
  list-style-type: none;
  padding: 20px;
  margin: auto;
`;

export const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 10px;
  align-items: center;
  border-bottom: 2px solid #eeeeee;
  padding: 10px;
  visibility: visible;

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const Content = styled.span`
  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.color.teal};
  }
`;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  border: none;
  transition: filter 0.3s;
`;

export const DoneButton = styled(Button)`
  background: ${({ theme }) => theme.color.forestGreen};

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
    border: 1px solid ${({ theme }) => theme.color.black};
    border-radius: 3px;
  }
`;

export const RemoveButton = styled(Button)`
  background-color: ${({ theme }) => theme.color.red};

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;
