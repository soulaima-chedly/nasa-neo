import { Chart } from "./components/Chart";
import { useFetchNeo } from "./hooks/useFetchNeo";

export default function App() {
  const { data, loading, error } = useFetchNeo();

  if (loading) return <p className="text-center mt-10 text-lg">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="p-8 max-w-5xl mx-auto container">
      <h1 className="text-3xl font-bold mb-6 text-center">Near Earth Objects (Diameter Overview)</h1>
      <Chart data={data} />
    </div>
  );
}
