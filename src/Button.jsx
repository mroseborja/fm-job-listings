const Button = ({ text, clickFunc }) => {
  const handleClick = (evt) => clickFunc(evt.target.innerHTML);

  return (
    <button
      type="button"
      className="button button--cyan-200"
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
