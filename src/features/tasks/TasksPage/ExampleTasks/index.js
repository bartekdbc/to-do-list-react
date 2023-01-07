import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../../common/Button/styled";
import { fetchExampleTasks, selectIsLoading } from "../../tasksSlice";

const ExampleTasks = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(fetchExampleTasks())} disabled={isLoading}>
      {isLoading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
    </Button>
  );
};

export default ExampleTasks;
