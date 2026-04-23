import type { Book } from "../types/Boot";
import './book.css'
interface BookProps{
    book:Book
}

export default function Book({book}:BookProps){
    const {title,author,img_url} = book;

    return(
        <div className="book_card">
            <img className="book_img" src={img_url} alt={title}></img>
            <h2 className="title">{title}</h2>
            <h4 className="author">{author}</h4>
        </div>
    )
}
