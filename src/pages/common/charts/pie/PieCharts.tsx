import {Cell, Pie, PieChart as RePiChart, Tooltip} from "recharts";

const data = [
  {name: "Blood Test", value: 400},
  {name: "X-Ray", value: 300},
  {name: "MRI", value: 200},
  {name: "Urine Test", value: 100},
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const PieChart = () => {
  return (
    <RePiChart width={400} height={300}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </RePiChart>
  );
};

export default PieChart;
