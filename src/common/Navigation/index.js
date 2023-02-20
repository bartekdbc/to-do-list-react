import { toAuthor, toTasks } from "../../routes";
import { Nav, Ul, Li, StyledNavLink } from "./styled";

const Navigation = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <StyledNavLink to={toTasks()}>Tasks</StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to={toAuthor()}>About author</StyledNavLink>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navigation;
