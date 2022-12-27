import { useSelector } from "react-redux";
import Form from "../tasks/Form";
import TaskList from "../tasks/TaskList";
import Buttons from "../tasks/Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container/styled";
import { useTasks } from "../../useTasks";
import { selectTasks } from "./tasksSlice";

function Tasks() {

  const { tasks } = useSelector(selectTasks);

  const {
    // tasks,
    removeTask,
    setAllDone,
  } = useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={
          <TaskList
            removeTask={removeTask}
          />
        }
        extraContent={
          <Buttons
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default Tasks;
