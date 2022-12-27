import { useSelector, useDispatch } from "react-redux";
import { selectTasksState, toggleTaskDone, removeTask } from "../tasksSlice";
import { List, Item, Content, DoneButton, RemoveButton } from "./styled";

const TaskList = () => {
  const { tasks, hideDone } = useSelector(selectTasksState);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <DoneButton onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </DoneButton>
          <Content done={task.done}>{task.content}</Content>
          <RemoveButton onClick={() => dispatch(removeTask(task.id))}>🗑</RemoveButton>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
