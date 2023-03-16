function Button({ handelClick, children, isPrev, disabled }) {
  return (
    <>
      <button
        onClick={handelClick}
        className={`button ${isPrev ? 'button--prev' : 'button--next'}`}
        type="button"
        disabled={disabled}>
        {children}
      </button>
    </>
  );
}

export default Button;
