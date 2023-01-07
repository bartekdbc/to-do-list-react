import { Container } from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { Paragraph, Wrapper } from "./styled";

function AuthorPage() {
  return (
    <Container>
      <Header title="O autorze" />
      <Section
        title="Bartłomiej Dębiec"
        body={
          <Wrapper>
            <Paragraph>Cześć!👋 </Paragraph>
            <Paragraph>
              Jestem <b>Bartek</b>, pochodzę z Tomaszowa Mazowieckiego, lecz
              mieszkam na co dzień w Warszawie.
            </Paragraph>
            <Paragraph>
              Obecnie pracuję jako analityk finansowy w obszarze rachunkowości
              zarządczej.💸
            </Paragraph>
            <Paragraph>
              W życiu prywatnym cenię sobie spokój i <b>wartościowe</b> relacje
              międzyludzkie, dlatego większość wolnego czasu spędzam z
              najbliższymi. Uwielbiamy wspólnie <b>podróżować</b>, odkrywać nowe
              miejsca na mapie oraz próbować lokalnych przysmaków.🗺️
            </Paragraph>
            <Paragraph>
              Od kilku miesięcy jestem w trakcie intensywnej nauki
              programowania, a aplikacja, którą właśnie przeglądasz jest efektem
              mojej pracy w ramach kursu dla <b>Frontend Developerów</b>.😊
            </Paragraph>
          </Wrapper>
        }
      />
    </Container>
  );
}

export default AuthorPage;
