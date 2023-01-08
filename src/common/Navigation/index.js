import { toAuthor, toTasks } from "../../routes";
import { Nav, Ul, Li, StyledNavLink } from "./styled";

const Navigation = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
        </Li>
        <Li>
          <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navigation;
