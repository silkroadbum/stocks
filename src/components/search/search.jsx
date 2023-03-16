function Search({ handleChange, value }) {
  return (
    <div className="search">
      <input
        onChange={handleChange}
        className="search__field"
        type="text"
        placeholder="Enter company name..."
        value={value}
      />
    </div>
  );
}

export default Search;
