import Badge from "./Badge";
import Button from "./Button";
import ButtonList from "./ButtonList";

const Card = ({ data }) => {
  return (
    <div className="relative pb-3 pt-5">
      <div
        className={`flex flex-col gap-5 rounded-md bg-neutral px-6 py-4 shadow-lg shadow-primary/20 md:flex-row md:items-center ${
          data.featured && "border-s-[5px] border-s-primary"
        }`}
      >
        <img
          src={data.logo}
          alt="logo"
          className="absolute top-0 h-14 w-14 md:relative md:h-20 md:w-20"
        />
        <div className="flex w-full flex-col justify-between md:flex-row md:items-center">
          <div className="pb-3 pt-7 md:p-2">
            <h2 className="font-bold text-primary">
              {data.company}
              <span className="ml-5 md:ml-0 lg:ml-2">
                {data.new && <Badge color="bg-primary" text="new!" />}
                {data.featured && (
                  <Badge color="bg-secondary" text="featured" />
                )}
              </span>
            </h2>
            <h3 className="my-2 font-bold text-secondary md:my-0.5 md:text-lg">
              {data.position}
            </h3>
            <p className=" font-medium text-cyan-300">
              <span className="mr-1.5">{data.postedAt} </span>
              <span className="mr-1.5">&bull; {data.contract} </span>
              <span className="mr-1.5">&bull; {data.location} </span>
            </p>
          </div>
          <div className="flex flex-wrap gap-4 border-t-[1px] border-t-cyan-300/50 py-4 md:border-none">
            <Button text={data.role} />
            <Button text={data.level} />
            <ButtonList items={data.languages} />
            <ButtonList items={data.tools} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
