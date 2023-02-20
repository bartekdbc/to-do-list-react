import Form from "../TasksPage/Form";
import TaskList from "../TasksPage/TaskList";
import Buttons from "../TasksPage/Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import Search from "./Search";
import ExampleTasks from "./ExampleTasks";

function TasksPage() {
  return (
    <Container>
      <Header title="To do list" />
      <Section
        title="Add new task"
        body={<Form />}
        extraContent={<ExampleTasks />}
      />

      <Section title="Search" body={<Search />} />

      <Section
        title="To do list"
        body={<TaskList />}
        extraContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
