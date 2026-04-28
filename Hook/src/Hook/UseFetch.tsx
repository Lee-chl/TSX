import { useEffect, useState } from "react";

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoding] = useState<boolean>(true);

  useEffect(() => {
    const load = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      setLoding(false);
    };
    load();
  }, [url]);

  return { data, loading };
}
