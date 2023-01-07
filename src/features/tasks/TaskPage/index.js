import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";
import { TaskContent } from "./styled";

function TaskPage() {
  const { id } = useParams();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono zadania 😢"}
        body={
          <TaskContent>
            {!!task && (
              <>
                <strong>Ukończone:</strong> {task.done ? "Tak" : "Nie"}
              </>
            )}
          </TaskContent>
        }
      />
    </Container>
  );
}

export default TaskPage;
