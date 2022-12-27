import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTasksState, toggleHideDone, setAllDone, selectEmptyTasks } from "../tasksSlice";
import { Wrapper, Button } from "./styled";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectEmptyTasks);
  const { tasks, hideDone } = useSelector(selectTasksState);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            {hideDone ? "Pokaż" : "Ukryj"} ukończone
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={tasks.every(({ done }) => done)}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default Buttons;
