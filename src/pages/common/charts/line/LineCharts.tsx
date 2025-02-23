import {
  Legend,
  Line,
  LineChart as ReLineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {day: "Mon", patients: 50},
  {day: "Tue", patients: 70},
  {day: "Wed", patients: 80},
  {day: "Thu", patients: 65},
  {day: "Fri", patients: 90},
];

const LineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <ReLineChart data={data}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="Patients" stroke="#8884d8" />
      </ReLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
