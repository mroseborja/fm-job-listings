import data from "./data.json";
import FilterBox from "./FilterBox";
import Card from "./Card";
import { useState } from "react";

function App() {
  const [filter, setFilter] = useState([]);

  const addFilterItem = (item) => {
    setFilter((currData) =>
      !currData.includes(item) ? [...currData, item] : [...currData],
    );
  };

  const clearAllFilters = () => setFilter([]);

  const removeFilterItem = (item) => {
    setFilter((prevFilters) => prevFilters.filter((i) => i !== item));
  };

  const filterExists = (filterItems) =>
    filter.every((x) => filterItems.includes(x));

  return (
    <>
      <header>
        <picture>
          <source
            srcSet="/images/bg-header-desktop.svg"
            media="(min-width: 600px)"
          />
          <img src="/images/bg-header-mobile.svg" className="w-full" alt="" />
        </picture>
      </header>

      <main>
        <div className="wrapper">
          {filter.length !== 0 && (
            <FilterBox
              items={filter}
              clearFilterFunc={clearAllFilters}
              removeFilterFunc={removeFilterItem}
            />
          )}

          <div
            className={`card-grid ${filter.length === 0 && "translate-y-24"}`}
          >
            {data.map((company) => {
              let filterItems = [company.role, company.level]
                .concat(company.languages)
                .concat(company.tools);

              return (
                filterExists(filterItems) && (
                  <Card
                    key={company.id}
                    data={company}
                    filters={filterItems}
                    addFilterFunc={addFilterItem}
                  />
                )
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
