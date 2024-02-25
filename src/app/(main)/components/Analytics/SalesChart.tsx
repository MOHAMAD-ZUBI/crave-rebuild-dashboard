"use client";
import { FC } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const data = [
  {
    name: "Monday",
    Sales: 4000,
    Orders: 60,
  },
  {
    name: "Tuesday",
    Sales: 2000,
    Orders: 30,
  },
  {
    name: "Wednesday",
    Sales: 2500,
    Orders: 35,
  },
  {
    name: "Thursday",
    Sales: 6000,
    Orders: 90,
  },
  {
    name: "Friday",
    Sales: 500,
    Orders: 10,
  },
  {
    name: "Saturday",
    Sales: 800,
    Orders: 16,
  },
  {
    name: "Sunday",
    Sales: 3500,
    Orders: 50,
  },
];

const TooltipProps = typeof Tooltip;

type CustomTooltipProps = {
  active?: any;
  payload?: any;
  label?: any;
};

const CustomTooltip: FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="w-[150px] bg-content1 p-2 rounded-xl border border-content2">
        <p className="label">{`${label}`}</p>
        <p>Sales: {payload[0].value} TL</p>
      </div>
    );
  }

  return null;
};

const SalesChart = () => {
  return (
    <div className="mt-10 bg-background h-[500px] w-full  py-8 px-6 rounded-2xl shadow-xl shadow-primaryBgColor/50">
      <h1 className="mb-4 text-xl capitalize font-semibold">Sales Report</h1>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={500}
          data={data}
          margin={{
            top: 10,

            bottom: 32,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip cursor content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="Sales"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Area
            className=" fill-primary stroke-primary"
            type="monotone"
            dataKey="Sales"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
