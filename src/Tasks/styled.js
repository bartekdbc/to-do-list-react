import styled, { css } from "styled-components";

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

export const Button = styled.button`
  width: 30px;
  height: 30px;
  color: white;
  cursor: pointer;
  border: none;
  transition: background 0.3s;

  ${({ toggleDone }) =>
    toggleDone &&
    css`
      background: hsl(122, 61%, 34%);

      &:hover {
        background-color: hsl(122, 61%, 39%);
      }

      &:active {
        background-color: hsl(122, 61%, 44%);
        border: 1px solid black;
        border-radius: 3px;
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: red;

      &:hover {
        background-color: hsl(0, 100%, 60%);
      }

      &:active: {
        background-color: hsl(0, 100%, 65%);
      }
    `}
`;
