import { ImgUrl } from "../utils/constants";

const RestaurantListComponent = (props) => {
  const { resList } = props;
  const { name, cuisines, avgRating, locality } = resList?.info;
  return (
      <div className="card resto-card" data-testid="resCard">
        <img
          src={
            ImgUrl +
            resList.info.cloudinaryImageId
          }
          className="card-img-top"
          alt="Card Image"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{name}</h5>
          <div className="rating mb-4">
            <i className="fa fa-star"></i>
            <p className="mb-0">{avgRating}</p>
          </div>
          <p className="card-text mb-2">{cuisines.join(",")}</p>
          <p className="card-text mb-2 place">{locality}</p>
        </div>
      </div>
  );
};

export default RestaurantListComponent;
