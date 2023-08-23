const Button = ({ text }) => {
  return (
    <button className="bg-cyan-200 text-primary px-2 py-1 font-bold rounded-md hover:bg-primary hover:text-neutral">
      {text}
    </button>
  );
};

export default Button;
