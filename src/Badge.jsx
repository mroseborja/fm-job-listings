const Badge = ({ color, text }) => {
  return (
    <span
      className={`${color} text-cyan-100 uppercase font-bold px-2 pt-1 pb-0.5 inline-block rounded-2xl text-sm md:text-xs mx-1`}
    >
      {text}
    </span>
  );
};

export default Badge;
