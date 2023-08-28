import removeIcon from "/images/icon-remove.svg";

const FilteredItem = ({ item, clickFunc }) => {
  const handleClick = (item) => clickFunc(item);

  return (
    <span className="overflow-hidden rounded-sm bg-cyan-200 pl-2 text-lg font-bold text-primary">
      {item}
      <button onClick={() => handleClick(item)}>
        <img
          src={removeIcon}
          alt=""
          className="ml-3 inline h-max bg-primary p-2.5 hover:bg-secondary"
        />
      </button>
    </span>
  );
};

export default FilteredItem;
