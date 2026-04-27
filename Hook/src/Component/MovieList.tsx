import { useEffect, useState } from "react";

interface Moive {
  id: number;
  title: string;
  poster: string;
}

export default function MovieList() {
  const [moives, setMovies] = useState<Moive[]>([]);
  const [err, setError] = useState<string | null>(null);

  useEffect(() => {
    // await를 사용하기 위해서 async() 사용 
    const load = async () => {
      try {
        const res = await fetch(
          "https://raw.githubusercontent.com/wizard113/ML-Basic/main/movie.json",
        );

        if (!res.ok) {
          throw new Error("요청 실패");
        }

        const data = await res.json();
        const moiveList: Moive[] = data.movies;
        setMovies(moiveList);

      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      }

    };
    load();
  }, [moives]);

  if (err) return <p>오류 {err}</p>;

  return (
    <div style={container}>
      {moives.map((moive) => (
        <div key={moive.id} style={card}>
          <img style={image} src={moive.poster} alt={moive.title} />
          <div style={title}>{moive.title}</div>
        </div>
      ))}
    </div>
  );
}

// js로 CSS 추가
const container: React.CSSProperties = {
  display: "flex", // 가로로 쭉
  flexWrap: "wrap", // 넘어가면 줄 바꿔
  gap: "20px",
  justifyContent: "center", // 정렬
  alignItems: "center",
  minHeight: "100vh", // 높이 : 너가 가진 높이 중 전부를 다써라
};

const card: React.CSSProperties = {
  width: "200px",
  height: "400px",
  border: "2px solid #ddd", // 외곽선
  overflow: "hidden", // 이 범위에서 넘어가는건 가려줘
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column", // 세로로
  boxShadow: "16px 7px 8px 1px rgba(0,0,0,0.75)",
};

const image: React.CSSProperties = {
  width: "100%",
  height: "90%",
  objectFit: "cover", // 깨지지 않게 해줌
};

const title: React.CSSProperties = {
  height: "10%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center", // 정렬
  fontSize: "1.2rem",
  fontWeight: "bold",
  padding: "5px",
};
