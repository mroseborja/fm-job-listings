import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex flex-wrap gap-4 border-t-[1px] border-t-cyan-300/50 py-4 md:border-none">
      <Button text="Frontend" />
      <Button text="Senior" />
      <Button text="HTML" />
      <Button text="CSS" />
      <Button text="Javascript" />
    </div>
  );
};

export default ButtonList;
