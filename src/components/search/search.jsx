function Search({ handleChange, value, setInputValue }) {
  const onClickClearInput = () => {
    setInputValue('');
  };

  return (
    <div className="search">
      <div className="search__wrapper">
        <input
          onChange={handleChange}
          className="search__field"
          type="text"
          placeholder="Enter company name..."
          value={value}
        />
        <svg className="search__icon" width="24" height="24">
          <use xlinkHref="img/sprite.svg#search-icon"></use>
        </svg>
        <svg
          className={`search__close-icon ${value.length > 0 && 'search__close-icon--visible'}`}
          width="24"
          height="24"
          onClick={onClickClearInput}>
          <use xlinkHref="img/sprite.svg#close-icon"></use>
        </svg>
      </div>
    </div>
  );
}

export default Search;
