import React, { useEffect, useState } from "react";
import SecondaryNav from "./SecondaryNav";
import { PieChart } from "react-minimal-pie-chart";
import { useStateValue } from "../../../Contexts/UserProvider";
import "./Analytics.css";

const Analytics = () => {
  const [{ todoList }] = useStateValue();
  const [values, setValues] = useState({ todo: 0, progress: 0, done: 0 });
  const shiftSize =3;
  useEffect(() => {
    const tempValues = { todo: 0, progress: 0, done: 0 };
    todoList.forEach((todo) => {
      tempValues[todo.branch] += 1;
    });
    setValues(tempValues);
  }, [todoList]);

  return (
    <div>
      <SecondaryNav title="Analytics" />
      <div className="analytics">
        <h5>Your Task Trends in this Week</h5>
        <PieChart
          animate
          animationDuration={500}
          animationEasing="ease-out"
          className="piechart"
          startAngle={300}
          radius={PieChart.defaultProps.radius - shiftSize}
          segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}
          data={[
            { title: "To-Do", value: values["todo"], color: "#27AE60" },
            {
              title: "In Progress",
              value: values["progress"],
              color: "#F2C94C",
            },
            { title: "Done", value: values["done"], color: "#2F80ED" },
          ]}
        />

        <div className="chartLabels">
            <div className="chartLabel">
                <div className="color" style={{backgroundColor:"#27AE60"}}></div>
                <p>To-Do</p>
            </div>
            <div className="chartLabel">
                <div className="color" style={{backgroundColor:"#F2C94C"}}></div>
                <p>In-Progress</p>
            </div>
            <div className="chartLabel">
                <div className="color" style={{backgroundColor:"#2F80ED"}}></div>
                <p>Done</p>
            </div>

        </div>
      </div>

    </div>
  );
};

export default Analytics;
