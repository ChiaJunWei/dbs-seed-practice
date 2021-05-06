
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine
} from "recharts";

const data = [
  {
    name: "Jan",
    $: 3000,
    amt: 2210
  },
  {
    name: "Feb",
    $: 5000,
    amt: 2210
  },
  {
    name: "March",
    $: 8000,

    amt: 2290
  },
  {
    name: "April",
    $: 12000,
    amt: 2000
  },
  {
    name: "May",
    $: 15000,
    amt: 2181
  },

];

export default function SavingsBar() {
  return (
    <BarChart
      width={900}
      height={500}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <ReferenceLine y={0} stroke="#000" />
      <Bar dataKey="$" fill="#82ca9d" />
    </BarChart>
  );
}
