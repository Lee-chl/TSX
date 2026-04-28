import { useFetch } from "../Hook/UseFetch";

interface Moive {
  id: number;
  title: string;
}

export default function UseFetchShow() {
  const { data, loading } = useFetch<{ movies: Moive[] }>(
    "https://raw.githubusercontent.com/wizard113/ML-Basic/main/movie.json",
  );

  if (loading) return <p>loading~ </p>;

  return (
    <ul>
      {data?.movies.map((m) => (
        <li key={m.id}>{m.title}</li>
      ))}
    </ul>
  );
}