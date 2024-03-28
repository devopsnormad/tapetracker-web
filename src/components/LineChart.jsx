import React from "react";
import { VictoryChart, VictoryLine, VictoryAxis, VictoryLegend, VictoryTooltip } from "victory";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockLineData as data } from "../data/mockData";


const LineChart = ({ isCustomLineColors = false, isDashboard = false, timeRange }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  let selectedData;
  if (timeRange === "week") {
    selectedData = data.find((d) => d.id === "weeks").data;
  } else if (timeRange === "month") {
    selectedData = data.find((d) => d.id === "months").data;
  } else if (timeRange === "year") {
    selectedData = data.find((d) => d.id === "years").data;
  }

  return (
    <VictoryChart
      width={800}
      
      theme={{
        axis: {
          style: {
            axis: { stroke: colors.gray[100] },
            axisLabel: { fill: colors.gray[100] },
            grid: { stroke: colors.gray[100] },
            ticks: { stroke: colors.gray[100] },
            tickLabels: { fill: colors.gray[100] },
          },
        },
        legend: {
          style: {
            labels: { fill: colors.gray[100] },
          },
        },
        tooltip: {
          style: {
            fill: colors.primary[500],
          },
        },
      }}
      padding={{ top: 20, right: 20, bottom: 150, left: 25 }}
    >
   
      <VictoryLine
        data={selectedData}
        style={{
          data: { stroke: colors.greenAccent[500] },
        }}
        x="x"
        y="y"
        labels={({ datum }) => `${datum.x}: ${datum.y}`}
        labelComponent={<VictoryTooltip />}
      />
      <VictoryAxis
        dependentAxis
        label="count"
        style={{
          axis: { stroke: colors.gray[100] },
          axisLabel: { fill: colors.gray[100] },
          grid: { stroke: colors.gray[100] },
          ticks: { stroke: colors.gray[100] },
          tickLabels: { fill: colors.gray[100] },
        }}
      />
      <VictoryAxis
        label="Clothes Sewn"
        style={{
          axis: { stroke: colors.gray[100] },
          axisLabel: { fill: colors.greenAccent[400], fontWeight: 'bold'  },
          grid: { stroke: colors.gray[100] },
          ticks: { stroke: colors.gray[100] },
          tickLabels: { fill: colors.gray[100] },
        }}
      />
    </VictoryChart>
  );
};

export default LineChart;
