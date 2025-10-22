export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-row">
      <input
        className="search-input"
        placeholder="SEARCH BOOKS"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
