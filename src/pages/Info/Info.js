import React from "react";
import { listOfTasks } from "./listOfTasks";
import "./Info.scss";

//TODO: move fns to separate file
//FNS
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
//-FNS END-//

const ongoingText = `ONGOING project, NOT fully optimized.`;
//Some features are still being added

function Home() {
  const [{ content, cursor: index }, setContent] = React.useState({
    content: "",
    cursor: 0,
  });

  React.useEffect(() => {
    if (index === ongoingText.length) {
      return;
    }

    const delay = setTimeout(() => {
      setContent({ content: content + ongoingText[index], cursor: index + 1 });
    }, 0 || 140);

    return () => {
      clearTimeout(delay);
    };
  }, [content, index]);

  return (
    <div className="Home">
      <article>
        <h1>Important!</h1>
        <h3 className="typing">
          {" "}
          <span>{content}</span>
        </h3>
        <hr></hr>

        <article className="built-with">
          <strong>
            Built with{" "}
            <span className="bb-style">
              REACT <sup>hooks</sup>
            </span>{" "}
            + <span className="bb-style">REDUX</span> +{" "}
            <span className="bb-style">SASS</span>
          </strong>
        </article>

        <article>
          <p>
            This project simulates a <b>phantasy online shop</b> where you can book days
            with actors of the Breaking Bad series.
          </p>

          <p>
            The data consists of a mixture of the{" "}
            <span className="bb-style">
              Breaking Bad <b>API</b>
            </span>{" "}
            data and own object manipulation in order to add the necessary entries for a
            shop behaviour.
          </p>
        </article>
      </article>
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
        <p>{`There are a total of ${listOfTasks.length} tasks, from which ${calcCompleted(
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
