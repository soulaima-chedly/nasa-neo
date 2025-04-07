import { useState } from "react";
import { useFetchNeo } from "./hooks/useFetchNeo";
import { Chart } from "./components/Chart";
import { NeoTable } from "./components/NeoTable";
import { exportToCsv } from "./utils/exportToCsv";

export default function App() {
  const { data, bodies, loading, error } = useFetchNeo();
  const [selectedBody, setSelectedBody] = useState("");
  const [view, setView] = useState<"chart" | "table">("chart");

  if (loading) return <p className="text-center mt-10 text-lg">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  const filteredData = selectedBody
    ? data.filter((d) => d.orbitingBodies.includes(selectedBody))
    : data;

  return (
    <div className="p-8 max-w-6xl mx-auto">
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

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        <button
          onClick={() => setView("chart")}
          className={`px-4 py-2 rounded ${view === "chart"
            ? "bg-blue-500 text-white"
            : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          Chart View
        </button>
        <button
          onClick={() => setView("table")}
          className={`px-4 py-2 rounded ${view === "table"
            ? "bg-blue-500 text-white"
            : "bg-gray-100 hover:bg-gray-200"
            }`}
        >
          Table View
        </button>

      </div>
      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        <button
          onClick={() =>
            exportToCsv("neo_data.csv", filteredData.map(d => ({
              name: d.name,
              min_diameter_km: d.minDiameter.toFixed(3),
              max_diameter_km: d.maxDiameter.toFixed(3),
              avg_diameter_km: d.avgDiameter.toFixed(3),
              orbiting_bodies: d.orbitingBodies.join(", "),
            })))
          }
          className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
        >
          Download CSV
        </button>
      </div>


      {view === "chart" ? (
        <Chart data={filteredData} />
      ) : (
        <NeoTable data={filteredData} />
      )}
    </div>
  );
}
