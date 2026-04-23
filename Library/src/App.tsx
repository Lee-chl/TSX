import './App.css'
import type { Book } from './types/Boot'
import Books from './component/Book'

function App() {
  const books:Book[] = [
    {title:'한입 크기로 잘라먹는 리액트',author:"이정환",img_url:"https://image.aladin.co.kr/product/38646/7/cover200/8966265235_1.jpg"},
    {title:"처음 배우는 애저",author:'김도균',img_url:'https://image.aladin.co.kr/product/32790/94/cover500/k722936599_1.jpg'},
    {title:'Node.js 교과서',author:'조현영',img_url:'https://image.aladin.co.kr/product/30678/38/cover500/k552830138_1.jpg'}
  ]
  return (
    <div>
    <Books book={books[0]}/>
    <Books book={books[1]}/>
    <Books book={books[2]}/>
    </div>
  )
}

export default App
