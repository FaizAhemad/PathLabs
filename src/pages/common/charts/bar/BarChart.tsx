import {
  Bar,
  Legend,
  BarChart as ReBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {month: "Jan", revenue: 5000},
  {month: "Feb", revenue: 7000},
  {month: "Mar", revenue: 6000},
  {month: "Apr", revenue: 8000},
  {month: "May", revenue: 9000},
];

const BarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ReBarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="revenue" fill="#82ca9d" />
      </ReBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;
