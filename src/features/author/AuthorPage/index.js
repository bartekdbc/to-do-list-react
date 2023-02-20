import { Container } from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { Paragraph, Wrapper } from "./styled";

function AuthorPage() {
  return (
    <Container>
      <Header title="About author" />
      <Section
        title="Bartlomiej Debiec"
        body={
          <Wrapper>
            <Paragraph>Hi there!👋 </Paragraph>
            <Paragraph>
              I am <b>Bartlomiej</b>, I come from Poland, but I live in Sydney
              on a daily basis.
            </Paragraph>
            <Paragraph>
              In private life, I value peace and <b>worthwhile</b>{" "}
              relationships, which is why I spend most of the free time with my
              beloved ones. We love to <b>travel</b> together, discover new
              places on the map and try local cuisines.🗺️
            </Paragraph>
            <Paragraph>
              I have been learning programming intensively for almost a year
              now, and the application you are viewing is the result of my work
              as part of a course for <b>Frontend Developers</b>.😊
            </Paragraph>
          </Wrapper>
        }
      />
    </Container>
  );
}

export default AuthorPage;
