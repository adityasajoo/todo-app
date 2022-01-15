import React, { useEffect, useState } from "react";
import SecondaryNav from "./SecondaryNav";
import { PieChart } from "react-minimal-pie-chart";
import { useStateValue } from "../../../Contexts/StateProvider";
import { BRANCHES } from "../../../utils/Constants";
import EmptyTask from "./EmptyTask";

const Analytics = () => {
  const [{ taskList }] = useStateValue();
  const [values, setValues] = useState({ todo: 0, progress: 0, done: 0 });

  //Control Explode of the PI Chart
  const shiftSize = 3;

  //Update pichart when tasklist changes
  useEffect(() => {
    const tempValues = { todo: 0, progress: 0, done: 0 };
    taskList.forEach((todo) => {
      tempValues[todo.branch] += 1;
    });
    setValues(tempValues);
  }, [taskList]);

  return (
    <div>
      <SecondaryNav title="Analytics" />
      {!taskList.length ? (
        <EmptyTask />
      ) : (
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
              { title: "To-Do", value: values[BRANCHES[0]], color: "#27AE60" },
              {
                title: "In Progress",
                value: values[BRANCHES[1]],
                color: "#F2C94C",
              },
              { title: "Done", value: values[BRANCHES[2]], color: "#2F80ED" },
            ]}
          />

          <div className="chartLabels">
            <div className="chartLabel">
              <div
                className="color"
                style={{ backgroundColor: "#27AE60" }}
              ></div>
              <p>To-Do</p>
            </div>
            <div className="chartLabel">
              <div
                className="color"
                style={{ backgroundColor: "#F2C94C" }}
              ></div>
              <p>In-Progress</p>
            </div>
            <div className="chartLabel">
              <div
                className="color"
                style={{ backgroundColor: "#2F80ED" }}
              ></div>
              <p>Done</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Analytics;
