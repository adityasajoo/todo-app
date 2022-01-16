import React, { useEffect, useState } from "react";
import SecondaryNav from "./SecondaryNav";
import { PieChart } from "react-minimal-pie-chart";
import { useStateValue } from "../../../Contexts/StateProvider";
import { BRANCHES, branchHeader, COLORS } from "../../../Utils/Constants";
import EmptyTask from "./EmptyTask";

const Analytics = () => {
  const [{ taskList }] = useStateValue();
  const [data, setData] = useState([]);

  //Control Explode of the PI Chart
  const shiftSize = 3;

  //Update pichart when tasklist changes
  useEffect(() => {
    const tempValues = { todo: 0, progress: 0, done: 0 };
    taskList.forEach((todo) => {
      tempValues[todo.branch] += 1;
    });
    const tempData = [];
    for (const [key, value] of Object.entries(tempValues)) {
      if (value !== 0) {
        tempData.push({ title: branchHeader[key], value, color: COLORS[key] });
      }
    }
    setData(tempData);
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
            label={({ dataEntry }) => dataEntry.value}
            labelStyle={{ fontSize: "5px" }}
            animationEasing="ease-out"
            className="piechart"
            startAngle={300}
            radius={PieChart.defaultProps.radius - shiftSize}
            segmentsShift={(index) => (index === 0 ? shiftSize : 0.5)}
            data={data}
          />

          <div className="chartLabels">
            {BRANCHES.map((branch) => {
              const style = { backgroundColor: COLORS[branch] };
              return (
                <div className="chartLabel">
                  <div className="color" style={style}></div>
                  <p>{branchHeader[branch]}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Analytics;
