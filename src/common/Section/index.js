import { StyledSection, Header, List } from "./styled";

const Section = ({ title, body, extraContent }) => (
  <StyledSection>
    <Header>
      {title}
      {extraContent}
    </Header>
    <List>{body}</List>
  </StyledSection>
);

export default Section;
