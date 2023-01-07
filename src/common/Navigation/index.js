import { Link } from "react-router-dom";
import { Nav, Ul, Li } from "./styled";

const Navigation = () => {
  return (
    <Nav>
      <Ul>
        <Li>
          <Link to="/zadania">Zadania</Link>
        </Li>
        <Li>
          <Link to="/autor">O autorze</Link>
        </Li>
      </Ul>
    </Nav>
  );
};

export default Navigation;
