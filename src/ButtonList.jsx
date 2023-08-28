import Button from "./Button";

const ButtonList = ({ items, clickFunc }) => {
  return (
    <div className="card__buttons">
      {items.map((item, idx) => (
        <Button key={item[idx]} text={item} clickFunc={clickFunc} />
      ))}
    </div>
  );
};

export default ButtonList;
