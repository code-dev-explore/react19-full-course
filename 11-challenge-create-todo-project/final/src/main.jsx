import { createRoot } from "react-dom/client";
import "./index.css";

const todo = (
  <div className="container">
    <div className="item">
      <div className="date">
        <div className="day">12</div>
        <div className="month">Jan</div>
      </div>
      <div className="content">
        <div className="title">
          <h2>Learn React</h2>
        </div>
        <div className="desc">Study Lesson 11 on CodeX channel.</div>
      </div>
    </div>
    <div className="item">
      <div className="date">
        <div className="day">13</div>
        <div className="month">Jan</div>
      </div>
      <div className="content">
        <div className="title">
          <h2>Learn HTML</h2>
        </div>
        <div className="desc">Study Lesson 25 on CodeX channel.</div>
      </div>
    </div>
    <div className="item">
      <div className="date">
        <div className="day">18</div>
        <div className="month">Jan</div>
      </div>
      <div className="content">
        <div className="title">
          <h2>Watch NFL</h2>
        </div>
        <div className="desc">Study Lesson 11 on CodeX channel.</div>
      </div>
    </div>
    <div className="item">
      <div className="date">
        <div className="day">22</div>
        <div className="month">Jan</div>
      </div>
      <div className="content">
        <div className="title">
          <h2>Read a book</h2>
        </div>
        <div className="desc">Harry Potter</div>
      </div>
    </div>
  </div>
);
createRoot(document.getElementById("root")).render(todo);
