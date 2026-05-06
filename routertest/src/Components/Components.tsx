import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";

export function Header() {
  return (
    <>
      <Link to="/">
        <h1>헤더입니다.</h1>
      </Link>
    </>
  );
}

export function Main() {
  return (
    <>
      <h3>안녕하세요. 메인페이지 입니다.</h3>
      <h3>안녕하세요. 메인페이지 입니다.</h3>
      <Link to="/product/1">
        <li>1번상품</li>
      </Link>
      <Link to="/product/2">
        <li>2번상품</li>
      </Link>
    </>
  );
}

export function Product() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const q = searchParams.get("q");
  const q1 = searchParams.get("name");
  const location = useLocation();

  return (
    <>
      <h3>{id}번 상품 페이지입니다.</h3>
      <p>검색어 q:{q}</p>
      <p>name: {q1}</p>
      <p>search: {location.search}</p>
      <p>hash: {location.hash}</p>
    </>
  );
}
export function NotFound() {
  return (
    <>
      <h1>404 Error</h1>
    </>
  );
}
