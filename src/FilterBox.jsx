import FilteredItem from "./FilteredItem";

const FilterBox = ({ items, clearFilterFunc, removeFilterFunc }) => {
  return (
    <div className="card flex items-center justify-between">
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <FilteredItem key={item} item={item} clickFunc={removeFilterFunc} />
        ))}
      </div>
      <button
        type="button"
        className="button button--link"
        onClick={() => clearFilterFunc()}
      >
        Clear
      </button>
    </div>
  );
};

export default FilterBox;
