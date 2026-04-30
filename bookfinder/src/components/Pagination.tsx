import "./Pagination.css";
interface PaginationProps {
  pageBtnClick: (btn: string) => void;
  pageNum: number;
  isEnd: boolean;
}

export default function Pagination({
  pageBtnClick,
  pageNum,
  isEnd,
}: PaginationProps) {
  const onClickPre = () => {
    pageBtnClick("PRE");
  };
  const onClickNext = () => {
    pageBtnClick("NEXT");
  };

  return (
    <div className="pagination">
      <button onClick={onClickPre} disabled={pageNum === 1}>
        이전
      </button>
      <span>{pageNum}</span>
      <button onClick={onClickNext} disabled={isEnd}>
        다음
      </button>
    </div>
  );
}
