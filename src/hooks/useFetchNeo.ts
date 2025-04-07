import { useEffect, useState } from "react";
import { NEO_API_URL } from "../constants/api";
import { NearEarthObject, Neo, ParsedNearEarthObject } from "../types/neo";


export const useFetchNeo = () => {
  const [data, setData] = useState<ParsedNearEarthObject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchNeo() {
      try {
        const res = await fetch(NEO_API_URL);
        const json: Neo = await res.json();
        const processed = json.near_earth_objects.map((neo) => {
          const min = neo.estimated_diameter.kilometers.estimated_diameter_min;
          const max = neo.estimated_diameter.kilometers.estimated_diameter_max;
          return {
            name: neo.name,
            minDiameter: min,
            maxDiameter: max,
            avgDiameter: (min + max) / 2
          };
        }).sort((a, b) => b.avgDiameter - a.avgDiameter);
        setData(processed);
      } catch (err: any) {
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchNeo();
  }, []);

  return { data, loading, error };
};
