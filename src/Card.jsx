// import data from "./data.json";
import profile from "/assets/images/photosnap.svg";
import Badge from "./Badge";
import ButtonList from "./ButtonList";

const Card = () => {
  return (
    <div className="relative pb-3 pt-5">
      <div className="flex flex-col gap-5 rounded-md border-s-[5px] border-s-primary bg-neutral px-6 py-4 shadow-lg shadow-primary/20 md:flex-row md:items-center">
        <img
          src={profile}
          alt=""
          className="absolute top-0 h-14 w-14 md:relative md:h-20 md:w-20"
        />
        <div className="flex w-full flex-col justify-between md:flex-row md:items-center">
          <div className="pb-3 pt-7 md:p-2">
            <h2 className="font-bold text-primary">
              Photosnap
              <span className="ml-5 md:ml-0 lg:ml-2">
                <Badge color="bg-primary" text="new!" />
                <Badge color="bg-secondary" text="featured" />
              </span>
            </h2>
            <h3 className="my-2 font-bold text-secondary md:my-0.5 md:text-lg">
              Senior Frontend Developer
            </h3>
            <p className=" font-medium text-cyan-300">
              <span className="mr-1.5">1d ago </span>
              <span className="mr-1.5">&bull; Full Time </span>
              <span className="mr-1.5">&bull; USA only</span>
            </p>
          </div>
          <ButtonList />
        </div>
      </div>
    </div>
  );
};

export default Card;
