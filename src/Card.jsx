import Badge from "./Badge";
import ButtonList from "./ButtonList";

const Card = ({ data, filters, addFilterFunc }) => {
  return (
    <div
      className={`card card-grid-item ${
        data.featured && "border-s-[5px] border-s-primary"
      }`}
    >
      <div className="card__img">
        <img src={data.logo} alt="" />
      </div>
      <div className="card__content">
        <div className="card__text">
          <h2 className="card__title">{data.company}</h2>
          <div className="card__badge">
            {data.new && <Badge color="bg-primary" text="new!" />}
            {data.featured && <Badge color="bg-secondary" text="featured" />}
          </div>
          <h3 className="card__subtitle">{data.position}</h3>
          <p className="card__details">
            <span className="card__detail">{data.postedAt} </span>
            <span className="card__detail">&bull;</span>
            <span className="card__detail">{data.contract} </span>
            <span className="card__detail">&bull;</span>
            <span className="card__detail">{data.location} </span>
          </p>
        </div>

        <hr className="mb-5 mt-3 h-px border border-cyan-300/30 sm:mb-0 sm:mt-0 sm:border-0" />

        <ButtonList items={filters} clickFunc={addFilterFunc} />
      </div>
    </div>
  );
};

export default Card;
