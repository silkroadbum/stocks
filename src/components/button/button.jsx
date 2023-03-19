function Button({ handleClick, children, isPrev, disabled }) {
  return (
    <>
      <button
        onClick={handleClick}
        className={`button ${isPrev ? 'button--prev' : 'button--next'}`}
        type="button"
        disabled={disabled}>
        {children}
      </button>
    </>
  );
}

export default Button;
