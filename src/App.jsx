import Card from "./Card";

function App() {
  return (
    <>
      <div
        className="h-36 w-full 
      bg-primary bg-[url('/assets/images/bg-header-mobile.svg')] bg-cover bg-no-repeat sm:bg-[url('/assets/images/bg-header-desktop.svg')]"
      ></div>
      <div className="container mx-auto px-7 py-10 md:px-3 lg:px-14">
        <Card />
      </div>
    </>
  );
}

export default App;
