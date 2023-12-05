import Loading from "./shimmer";
import { ImgUrl } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import useNetworkConnectionStatus from "../utils/useNetworkConnectionStatus";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantDetailsComponent = () => {
  const resid = useParams();
  const onlineStatus = useNetworkConnectionStatus();
  const dispatch = useDispatch();

  let [restaurantInfo, isExpand, setIsExpand, expandedIndex, setExpandedIndex] =
    useRestaurantMenu(resid);
  if (onlineStatus === false) {
    return <div>No Internet Connection !!!</div>;
  }

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  if (restaurantInfo === null) {
    return <Loading />;
  }

  const {
    name,
    cuisines,
    areaName,
    sla,
    avgRatingString,
    totalRatingsString,
    expectationNotifiers,
    costForTwoMessage,
  } = restaurantInfo?.cards[0]?.card?.card?.info;

  const { cards } =
    restaurantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

  const filteredCards = cards.filter((item) => {
    return (
      item.card.card.hasOwnProperty("title") &&
      item.card.card.hasOwnProperty("itemCards")
    );
  });

  return (
    <div className="container-md rest-details">
      <div className="header-card">
        <div className="d-flex justify-content-between align-items-center border-shade pb-3">
          <div className="">
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <p>
              {areaName}, {sla?.lastMileTravelString}
            </p>
            {/* <p>{expectationNotifiers[0]?.text}</p> */}
          </div>

          <div className="rest-ratings">
            <p>
              <i className="fa fa-star"></i> {avgRatingString}
            </p>
            <p className="font-bold">{totalRatingsString}</p>
          </div>
        </div>
        <div className="d-flex mt-2">
          <div className="mr-2">
            <i className="fa fa-clock-o" aria-hidden="true"></i>
            {sla.slaString}
          </div>
          <span>
            <i className="fa fa-usd" aria-hidden="true"></i>
            {costForTwoMessage}
          </span>
        </div>
      </div>

      <div>
        {filteredCards.map((cards, index) => (
          <div key={index} className="items-available">
            <div
              className="card-items-header d-flex justify-content-between align-items-center"
              onClick={() => {
                if (index === expandedIndex) {
                  isExpand = !isExpand;
                }
                setIsExpand(isExpand);
                setExpandedIndex(index);
              }}
            >
              <h4>
                {cards?.card?.card?.title} ({cards?.card?.card.itemCards.length}
                )
              </h4>
              {index === expandedIndex && isExpand ? (
                <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
              ) : (
                <i className="fa fa-chevron-circle-up" aria-hidden="true"></i>
              )}
            </div>
            {index === expandedIndex && isExpand ? (
              <div className="card-items-list">
                {cards?.card?.card.itemCards.map((item, index) => (
                  <div key={index}>
                    <div className="d-flex justify-content-between item-sub-card mb-5">
                      <div>
                        <h5>{item?.card?.info?.name}</h5>
                        <p className="pb-3">
                          <i className="fa fa-inr" aria-hidden="true"></i>{" "}
                          {item?.card?.info?.price / 100}
                        </p>
                        <p className="item-description">
                          {item?.card?.info?.description}
                        </p>
                      </div>
                      <div className="item-img">
                        <img src={ImgUrl + item?.card?.info?.imageId} alt="" />
                        <button
                          className="position-absolute"
                          onClick={() => handleAddItem(item)}
                        >
                          <i className="fa fa-add"></i>Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetailsComponent;
