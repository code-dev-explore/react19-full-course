import TodoItem from "./TodoItem";
import "./Todo.css";

const Todo = () => {
  return (
    <div className="container">
      <TodoItem />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default Todo;
