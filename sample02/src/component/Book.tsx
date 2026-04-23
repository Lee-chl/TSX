import React from "react";

interface BookPorps {
  title: string;
  author: string;
}

function Book(props: BookPorps) {
  return (
    <>
      <h1>{`이 책은 이름은 ${props.title}입니다.`}</h1>
      <h1>{`이 책의 저자는 ${props.author}입니다.`}</h1>
    </>
  );
}

export default Book;