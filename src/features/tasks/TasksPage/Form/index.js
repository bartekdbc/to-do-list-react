import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { StyledForm, Button } from "./styled";
import { addTask } from "../../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import Input from "../Input";

const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedNewTaskContent = newTaskContent.trim();

    if (!trimmedNewTaskContent) {
      return;
    }

    dispatch(
      addTask({
        content: trimmedNewTaskContent,
        done: false,
        id: nanoid(),
      })
    );

    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        ref={inputRef}
        value={newTaskContent}
        autoFocus
        placeholder="What are you going to do?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <Button>Add task</Button>
    </StyledForm>
  );
};

export default Form;
