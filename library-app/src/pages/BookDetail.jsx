import { useParams, Link } from "react-router-dom";
import { books } from "../data/books";

export default function BookDetail() {
  const { id } = useParams();
  const book = books.find((b) => b.id === Number(id));

  if (!book) return <div>Book not found</div>;

  return (
    <div className="page detail-page">
      <aside className="sidebar">
        <div className="avatar-circle" />
      </aside>

      <main className="content">
        <Link to="/" className="back-link">BACK</Link>

        <div className="detail-top">
          <img src={book.cover} alt={book.title} className="detail-cover" />
          <div className="detail-meta">
            <h1>{book.title}</h1>
            <div>BY: {book.author}</div>
            <div>{book.publication_date}</div>
            <a
              href={book.pdf}
              target="_blank"
              rel="noreferrer"
              className="read-button"
            >
              READ
            </a>
          </div>

          <aside className="more-like">
            <div>MORE LIKE THIS</div>
            {books
              .filter((b) => b.genre === book.genre && b.id !== book.id)
              .slice(0, 3)
              .map((b) => (
                <div key={b.id} className="similar">{b.title}</div>
              ))}
          </aside>
        </div>

        <section className="summary">
          <h3>BOOK SUMMARY</h3>
          <p>{book.summary}</p>
        </section>
      </main>
    </div>
  );
}
