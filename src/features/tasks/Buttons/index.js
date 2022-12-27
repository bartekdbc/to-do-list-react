import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  setAllDone,
  selectEmptyTasks,
  selectHideDoneTasks,
  selectEveryDoneTasks,
} from "../tasksSlice";
import { Wrapper, Button } from "./styled";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectEmptyTasks);
  const hideDoneTasks = useSelector(selectHideDoneTasks);
  const allTasksDone = useSelector(selectEveryDoneTasks);

  const dispatch = useDispatch();
  return (
    <Wrapper>
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
