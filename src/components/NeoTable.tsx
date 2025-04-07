import { ParsedNearEarthObject } from "../types/neo";

type Props = {
    data: ParsedNearEarthObject[];
};

export const NeoTable = ({ data }: Props) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse border border-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border px-4 py-2 text-left">#</th>
                        <th className="border px-4 py-2 text-left">Name</th>
                        <th className="border px-4 py-2 text-left">Min Diameter (km)</th>
                        <th className="border px-4 py-2 text-left">Max Diameter (km)</th>
                        <th className="border px-4 py-2 text-left">Avg Diameter (km)</th>
                        <th className="border px-4 py-2 text-left">Orbiting Bodies</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((neo, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                            <td className="border px-4 py-2">{idx + 1}</td>
                            <td className="border px-4 py-2">{neo.name}</td>
                            <td className="border px-4 py-2">{neo.minDiameter.toFixed(3)}</td>
                            <td className="border px-4 py-2">{neo.maxDiameter.toFixed(3)}</td>
                            <td className="border px-4 py-2 font-medium">{neo.avgDiameter.toFixed(3)}</td>
                            <td className="border px-4 py-2">
                                {neo.orbitingBodies.join(", ") || "N/A"}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
