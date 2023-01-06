import { Container } from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { Paragraph, Wrapper } from "../AuthorPage/styled";

function AuthorPage() {
  return (
    <Container>
      <Header title="O autorze" />
      <Section
        title="Bartłomiej Dębiec"
        body={
          <Wrapper>
            <Paragraph>
              Jestem <b>Bartek</b>, mam 25 lat i pochodzę z środkowej Polski,
              dokładniej z Tomaszowa Mazowieckiego.
              <br />Z wykształcenia jestem finansistą, ukończyłem studia
              magisterskie w Szkole Głównej Handlowej, na kierunku{" "}
              <b>Finanse i rachunkowość</b>. Na co dzień zaś pracuje w
              bankowości, dokładniej w Departamencie Planowania Finansowego, dla
              jednego z największych banków komercyjnych w Polsce. 💸
            </Paragraph>{" "}
          </Wrapper>
        }
      />
    </Container>
  );
}

export default AuthorPage;
