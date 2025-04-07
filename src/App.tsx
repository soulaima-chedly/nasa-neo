import { useState } from "react";
import { Chart } from "./components/Chart";
import { useFetchNeo } from "./hooks/useFetchNeo";

export default function App() {
  const { data, bodies, loading, error } = useFetchNeo();
  const [selectedBody, setSelectedBody] = useState("");

  if (loading) return <p className="text-center mt-10 text-lg">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  const filteredData = selectedBody
    ? data.filter((d) => d.orbitingBodies.includes(selectedBody))
    : data;

  return (
    <div className="p-8 max-w-5xl mx-auto container">
      <h1 className="text-3xl font-bold mb-6 text-center">Near Earth Objects</h1>

      <div className="mb-6 flex justify-center">
        <select
          value={selectedBody}
          onChange={(e) => setSelectedBody(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 text-sm"
        >
          <option value="">All Orbital Bodies</option>
          {bodies.map((body) => (
            <option key={body} value={body}>
              {body}
            </option>
          ))}
        </select>
      </div>


      <Chart data={filteredData} />
    </div>
  );
}
