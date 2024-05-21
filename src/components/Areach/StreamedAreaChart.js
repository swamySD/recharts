import React from "react";
import {
  Area,
  XAxis,
  YAxis,
  AreaChart,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./StreamedAreaChart.css";
const data = [
  {
    month: "",
   values:{
    issue_Open: [16, 19],
    issue_Started: [14, 15.9],
    issue_Completed: [12, 13.9],
   }
  },
  {
    month: "Jan",
    values:{issue_Open: [16.8, 19.5],
    issue_Started: [13.8, 16.67],
    issue_Completed: [10.2, 13.7],
  }
  },
  {
    month: "Feb",
    values:{
    issue_Open: [16.2, 22],
    issue_Started: [12.6, 16.1],
    issue_Completed: [10, 12.5],
    }
  },
  {
    month: "Mar",
    values:{
    issue_Open: [15.7, 24],
    issue_Started: [12.5, 15.6],
    issue_Completed: [9.5, 12.4],
    }
  },
  {
    month: "Apr",
    values:{
    issue_Open: [16.2, 26],
    issue_Started: [12.6, 16.1],
    issue_Completed: [9.5, 12.5],
    }
  },
  {
    month: "May",
    values:{
    issue_Open: [17.3, 27],
    issue_Started: [12.9, 17.3],
    issue_Completed: [9.4, 12.8],
    }
  },
  {
    month: "Jun",
    values:{
    issue_Open: [19.8, 29],
    issue_Started: [13.9, 19.7],
    issue_Completed: [9.38, 13.8],
    }
  },

  {
    month: "Jul",
    values:{
    issue_Open: [19.2, 32],
    issue_Started: [14.9, 19.1],
    issue_Completed: [8, 14.8],
    }
  },
  {
    month: "",
    values:{
    issue_Open: [23.5, 35],
    issue_Started: [17, 23.4],
    issue_Completed: [5.3, 16.9],
    }
  },
];



const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const monthIndex = data.findIndex((item) => item.month === label);
    const issueCompletedValue = Math.floor(
      data[monthIndex].values.issue_Completed[0]
    );
    const issueStartedValue = Math.floor(
      data[monthIndex].values.issue_Started[0]
    );
    const issueOpenValue = Math.floor(
      data[monthIndex].values.issue_Open[0]
    );

    return (
      <div className="custom_tooltip">
        <p>{`${label} 01 - ${label} 31, 2023`}</p>
        <div className="issue_container">
          <p>Issue Opened</p>
          <p>{`${issueCompletedValue}d`}</p>
        </div>
        <div className="issue_container">
          <p>Issue Started</p>
          <p>{`${issueStartedValue}d`}</p>
        </div>
        <div className="issue_container">
          <p>Issue Completed</p>
          <p>{`${issueOpenValue}d`}</p>
        </div>
      </div>
    );
  }

  return null;
};

const Areachart = () => {
  
  return (

    <div className="sprints-container">
       <div className="time-headings">
         <span>Total Lead time:35 days(Avg)</span>
         <span>Total Cycle Time:33 days(Avg)</span>
      </div>
      <ResponsiveContainer aspect={2}>
        <AreaChart
          width={500}
        
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <Tooltip content={<CustomTooltip />} />
          <XAxis dataKey="month" />
          <YAxis
            ticks={[0, 10, 20, 30, 40, 50]}
            label={{
              value: "Story Point(Days)",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Area dataKey="values.issue_Open" stroke="#668391" fill="#404040" />
          <Area dataKey="values.issue_Started" stroke="#949494" fill="#808080" />
          <Area dataKey="values.issue_Completed" stroke="#C0C0C0" fill="#d3d3d3" />
        </AreaChart>
      </ResponsiveContainer>

      <div className="chart-indicators-container">
        <div className="chart-indicators">
          <div className="icon issue-open" />
          <p className="issue-description">Issue open</p>
        </div>
        <div className="chart-indicators">
          <div className="icon issue-started" />
          <p className="issue-description">Issue Started</p>
        </div>
        <div className="chart-indicators">
          <div className="icon issue-completed" />
          <p className="issue-description">Issue Completed</p>
        </div>
      </div>
    </div>
  );
};

export default Areachart;