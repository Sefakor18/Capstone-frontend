import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  return (
    <div className="book-card">
      <Link to={`/book/${book.id}`}>
        <img src={book.cover} alt={book.title} className="thumb" />
      </Link>
      <div className="book-title">{book.title}</div>
      <div className="book-author">{book.author}</div>
    </div>
  );
}
