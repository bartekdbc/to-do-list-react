import { useState, useRef } from "react";
import { StyledForm, FormField, FormButton } from "./styled";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (newTaskContent.trim() !== "") {
      addNewTask(newTaskContent);
    }
    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <FormField
        ref={inputRef}
        value={newTaskContent}
        autoFocus
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <FormButton>Dodaj zadanie</FormButton>
    </StyledForm>
  );
};

export default Form;
