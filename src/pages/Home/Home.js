import React from "react";
import { listOfTasks } from "./listOfTasks";
import "./Home.scss";

const taskStatus = (status) => {
  if (status === true) return { color: "green" };
  else if (!status) return { color: "red" };
  else return { color: "orange" };
};

//Computation for report
const calcCategories = (list) => {
  const firstWordOfEachTitle = list.map((item) => item.title.split(" ")[0]);
  const categories = {};

  firstWordOfEachTitle.forEach((item) => {
    item = item.slice(0, item.length - 1); //removes colon
    if (!categories[item]) return (categories[item] = 1);
    else return (categories[item] += 1);
  });
  return Object.entries(categories);
};
const calcCompleted = (list) => list.filter((item) => item.completed).length;
const calcCompletedPercent = (list) =>
  Math.round((calcCompleted(list) * 100) / list.length);

function Home() {
  return (
    <div className="Home">
      <article>
        <h1>Important:</h1>
        <p>
          This is an{" "}
          <u>
            <span style={{ backgroundColor: "lightpink" }}>ongoing</span>
          </u>{" "}
          project whose focus is, primarily, behaviour with REACT (hooks) and
          REDUX.
        </p>
        <p>
          Graphical enhancements and responsive optimization will be added at a
          later stage, as well as optimized code.
        </p>
        <br></br>

        <p>
          <strong>Descr:</strong> This project consists on a{" "}
          <span style={{ backgroundColor: "lightpink" }}>
            phantasy online shop
          </span>{" "}
          where you can book days with actors of the Breaking Bad series (one of
          my favorites! ).{" "}
          <u>
            {" "}
            The data consists on a mixture of the Breaking Bad API data and
            object manipulation in order to add the necessary entries for a shop
            behaviour.
          </u>
        </p>
        <br></br>
        <p>
          Below, a list of the main libraries used, a dynamic list of the tasks
          for the project and also a simple dynamic report, just for fun...
        </p>
        <hr></hr>
      </article>
      <div className="tecs">
        <i>
          <strong>React-redux / React-router / React-hook-form</strong>
        </i>
      </div>
      <hr></hr>
      <div className="legend">
        <h5>Tasks</h5>
        <div className="wrapper">
          <span style={{ color: "green" }}>green: completed</span>
          <span style={{ color: "orange" }}>orange: partially completed</span>
          <span style={{ color: "red" }}>red: not began</span>
        </div>
      </div>
      <hr></hr>
      <section className="list">
        <h5>List</h5>
        <ul>
          {listOfTasks.map((item, i) => (
            <li key={i} style={taskStatus(item.completed)}>
              {item.title}
            </li>
          ))}
        </ul>
      </section>
      <section className="statistics">
        <h5>Report</h5>
        <p>{`There are a total of ${
          listOfTasks.length
        } tasks, from which ${calcCompleted(
          listOfTasks
        )} are completed (${calcCompletedPercent(listOfTasks)}%)  `}</p>
        <p>{`There are ${calcCategories(listOfTasks).length} categories:`}</p>
        {calcCategories(listOfTasks).map((item, i) => (
          <p key={i}>
            {item[0]} : {item[1]} {item[1] > 1 ? "tasks" : "task"}
          </p>
        ))}
      </section>
    </div>
  );
}

export default Home;
