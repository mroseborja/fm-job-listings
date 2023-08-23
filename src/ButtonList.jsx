import Button from "./Button";

const ButtonList = ({ items }) => {
  return (
    <>
      {items.map((item, idx) => (
        <Button key={item[idx]} text={item} />
      ))}
    </>
  );
};

export default ButtonList;
