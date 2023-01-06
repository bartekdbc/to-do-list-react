import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  setAllDone,
  selectAreTasksEmpty,
  selectHideDoneTasks,
  selectAllTasksDone,
  fetchExampleTasks,
} from "../tasksSlice";
import { Wrapper, Button } from "./styled";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const hideDoneTasks = useSelector(selectHideDoneTasks);
  const allTasksDone = useSelector(selectAllTasksDone);

  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
        Pobierz przykładowe zadania
      </Button>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={allTasksDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default Buttons;
