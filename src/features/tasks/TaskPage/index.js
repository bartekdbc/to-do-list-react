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
      <Header title="Task details" />
      <Section
        title={task ? task.content : "Unfortunately, the task was not found 😢"}
        body={
          <TaskContent>
            {!!task && (
              <>
                <strong>Completed:</strong> {task.done ? "Yes" : "No"}
              </>
            )}
          </TaskContent>
        }
      />
    </Container>
  );
}

export default TaskPage;
