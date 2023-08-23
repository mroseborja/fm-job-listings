import Card from "./Card";
import data from "./data.json";

function App() {
  return (
    <>
      <div
        className="h-36 w-full 
      bg-primary bg-[url('/images/bg-header-mobile.svg')] bg-cover bg-no-repeat sm:bg-[url('/images/bg-header-desktop.svg')]"
      ></div>
      <div className="container mx-auto px-7 py-10 md:px-3 lg:px-14">
        {data.map((company) => (
          <Card key={company.id} data={company} />
        ))}
      </div>
    </>
  );
}

export default App;
