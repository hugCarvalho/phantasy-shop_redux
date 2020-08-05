import React from "react";
import { listOfTasks } from "./listOfTasks";

const taskStatus = (status) => {
  console.log("listOfTasks.completed", listOfTasks.title);
  if (status === true) return { color: "green" };
  else if (!status) return { color: "red" };
  else return { color: "orange" };
};

function Home() {
  console.log("listOfTasks", listOfTasks);
  return (
    <div>
      <article>
        <h1>Important:</h1>
        <p>
          This is an <u>ongoing</u> project whose focus is primarily behaviour,
          mostly with REACT-REDUX.
        </p>
        <p>
          Graphical enhancements and responsiveness optimization will be added
          at a later stage.
        </p>
        <p>
          This project consists on a phantasy online shop, where you can book
          days with actors of the Breaking Bad series (one of my favorites! ) in
          order to simulate an online shop. For that, the data consists on a
          mixture of data from the Breaking Bad API and object manipulation to
          add the necessary entries.
        </p>
        <p>
          Below a list of the main concepts covered and a dynamic list of the
          tasks for the project.
        </p>
      </article>
      <div>React-redux - React-router</div>
      <div className="legend">
        <h4>Tasks</h4>
        <span style={{ color: "green" }}>green: completed</span>
        <span style={{ color: "orange" }}>orange: partially completed</span>
        <span style={{ color: "red" }}>red: not began</span>
      </div>
      <section>
        <ul>
          {listOfTasks.map((item, i) => (
            <li key={i} style={taskStatus(item.completed)}>
              {item.title}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Home;
