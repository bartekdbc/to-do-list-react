import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { toTask } from "../../../../routes";
import {
  toggleTaskDone,
  removeTask,
  selectHideDoneTasks,
  selectTaskByQuery,
} from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import {
  List,
  Item,
  Content,
  DoneButton,
  RemoveButton,
  StyledLink,
} from "./styled";

const TaskList = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const tasks = useSelector((state) => selectTaskByQuery(state, query));
  const hideDone = useSelector(selectHideDoneTasks);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <DoneButton onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </DoneButton>
          <Content done={task.done}>
            <StyledLink to={toTask({ id: task.id })}>{task.content}</StyledLink>
          </Content>
          <RemoveButton onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </RemoveButton>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
