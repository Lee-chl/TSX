import { useEffect, useState } from "react";
import type { APIResponse } from "../types/Book";

export default function useFetch<T>(
  query: string,
  pageNum: number,
  url: string,
  apiKey: string,
) {
  const [documents, setDocuments] = useState<T[]>([]);
  const [isend, setIsend] = useState<boolean>(false);

  useEffect(() => {
    if (!query) return;
    const feacthBooks = async () => {
      try {
        // 한글일 경우 encodeing해야지 되므로 encodeURIComponent 사용해서 만들어준다.
        const encodedQuery = encodeURIComponent(query);
        const endPoint = `${url}?query=${encodedQuery}&page=${pageNum}`;
        const response = await fetch(endPoint, {
          headers: {
            Authorization:apiKey,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP ERROR! status: ${response.status}`);
        }
        const data: APIResponse<T> = await response.json();
        setDocuments(data.documents);
        setIsend(data.meta.is_end);
      } catch (error) {
        if (error instanceof Error) return console.error(error.message);
      }
    };
    feacthBooks();
  }, [query, pageNum, url, apiKey]);

  return { documents, isend };
}
