import TodoDate from "./TodoDate";
import "./TodoItem.css";

const TodoItem = () => {
  return (
    <div className="item">
      <TodoDate />
      <div className="content">
        <div className="title">
          <h2>Learn React</h2>
        </div>
        <div className="desc">Study Lesson 11 on CodeX channel.</div>
      </div>
    </div>
  );
};

export default TodoItem;
