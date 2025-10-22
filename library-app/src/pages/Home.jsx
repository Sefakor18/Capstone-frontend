import { useState } from "react";
import { books } from "../data/books";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";

const GENRES = ["Romance", "Thriller", "Action", "Comedy", "Sci-Fi"];

export default function Home() {
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("");

  const filtered = books.filter((b) => {
    const matchTitle = b.title.toLowerCase().includes(query.toLowerCase());
    const matchGenre = genre ? b.genre === genre : true;
    return matchTitle && matchGenre;
  });

  return (
    <div className="page">
      <aside className="sidebar">
        <div className="avatar-circle" />
        <div className="sidebar-item">BOOKMARKS</div>
        <div className="sidebar-item">READLIST</div>
        <div className="sidebar-item">REVIEWS</div>
        <div className="sidebar-item">COMMUNITY</div>
        <div className="sidebar-item">NEW RELEASES</div>
      </aside>

      <main className="content">
        <header className="hero">WELCOME</header>
        <SearchBar value={query} onChange={setQuery} />

        <div className="genres">
          {GENRES.map((g) => (
            <button
              key={g}
              className={`chip ${genre === g ? "chip-active" : ""}`}
              onClick={() => setGenre(genre === g ? "" : g)}
            >
              {g}
            </button>
          ))}
        </div>

        <section className="grid">
          {filtered.map((b) => (
            <BookCard key={b.id} book={b} />
          ))}
        </section>
      </main>
    </div>
  );
}
