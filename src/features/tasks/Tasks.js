import Form from "../tasks/Form";
import TaskList from "../tasks/TaskList";
import Buttons from "../tasks/Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container/styled";

function Tasks() {
   return (
    <Container>
      <Header title="Lista zadań" />
      <Section title="Dodaj nowe zadanie" body={<Form />} />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraContent={<Buttons />}
      />
    </Container>
  );
}

export default Tasks;