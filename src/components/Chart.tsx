import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";
import { ParsedNearEarthObject } from "../types/neo";

type Props = {
  data: ParsedNearEarthObject[];
};

export const Chart = ({ data }: Props) => {
  return (
    <ResponsiveContainer width="100%" height={600}>
      <BarChart
        layout="vertical"
        data={data.slice(0, 10)}
        margin={{ top: 30, right: 30, left: 100, bottom: 30 }}
      >
        <XAxis
          type="number"
          label={{ value: "Min Estimated Diameter (km)", position: "insideBottom", offset: -10 }}

        />
        <YAxis
          type="category"
          dataKey="name"
          width={100}
          tick={{ fontSize: 12 }}
          label={{
            value: "NEO Name",
            angle: -90,
            position: "left",
            textAnchor: "center"
          }}

        />
        <Tooltip />
        <Legend
          wrapperStyle={{ top: 0, left: 25 }} />
        <Bar dataKey="minDiameter" fill="#60A5FA" name="Min Estimated Diameter (km)" />
        <Bar dataKey="maxDiameter" fill="#F87171" name="Max Estimated Diameter" />
      </BarChart>
    </ResponsiveContainer>
  );
};
