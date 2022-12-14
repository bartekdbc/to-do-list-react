import { Container } from "../../../common/Container/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { Paragraph, Wrapper } from "./styled";

function AuthorPage() {
  return (
    <Container>
      <Header title="O autorze" />
      <Section
        title="Bart艂omiej D臋biec"
        body={
          <Wrapper>
            <Paragraph>Cze艣膰!馃憢 </Paragraph>
            <Paragraph>
              Jestem <b>Bartek</b>, pochodz臋 z Tomaszowa Mazowieckiego, lecz
              mieszkam na co dzie艅 w Warszawie.
            </Paragraph>
            <Paragraph>
              Obecnie pracuj臋 jako kontroler finansowy w obszarze rachunkowo艣ci
              zarz膮dczej.馃捀
            </Paragraph>
            <Paragraph>
              W 偶yciu prywatnym ceni臋 sobie spok贸j i <b>warto艣ciowe</b> relacje
              mi臋dzyludzkie, dlatego wi臋kszo艣膰 wolnego czasu sp臋dzam z
              najbli偶szymi. Uwielbiamy wsp贸lnie <b>podr贸偶owa膰</b>, odkrywa膰 nowe
              miejsca na mapie oraz pr贸bowa膰 lokalnych przysmak贸w.馃椇锔?
            </Paragraph>
            <Paragraph>
              Od kilku miesi臋cy jestem w trakcie intensywnej nauki
              programowania, a aplikacja, kt贸r膮 w艂a艣nie przegl膮dasz jest efektem
              mojej pracy w ramach kursu dla <b>Frontend Developer贸w</b>.馃槉
            </Paragraph>
          </Wrapper>
        }
      />
    </Container>
  );
}

export default AuthorPage;
