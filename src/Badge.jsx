const Badge = ({ color, text }) => {
  return (
    <span
      className={`badge ${color} mx-1 text-sm font-bold uppercase text-cyan-100 md:text-xs`}
    >
      {text}
    </span>
  );
};

export default Badge;
