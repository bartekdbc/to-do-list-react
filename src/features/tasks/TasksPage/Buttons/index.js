import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleHideDone,
  setAllDone,
  selectAreTasksEmpty,
  selectHideDoneTasks,
  selectAllTasksDone,
} from "../../tasksSlice";
import { Wrapper, StyledButton } from "./styled";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const hideDoneTasks = useSelector(selectHideDoneTasks);
  const allTasksDone = useSelector(selectAllTasksDone);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {!areTasksEmpty && (
        <>
          <StyledButton onClick={() => dispatch(toggleHideDone())}>
            {hideDoneTasks ? "Show" : "Hide"} done
          </StyledButton>
          <StyledButton
            onClick={() => dispatch(setAllDone())}
            disabled={allTasksDone}
          >
            Complete all
          </StyledButton>
        </>
      )}
    </Wrapper>
  );
};

export default Buttons;
