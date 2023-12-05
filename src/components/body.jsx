import RestaurantListComponent from "./restaurant-card";
import { useState, useEffect } from "react";
import Loading from "./shimmer";
import { RES_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const AppBody = () => {
  let [restaurantList, setRestaurantList] = useState([]);
  let [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  let [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(RES_URL);

    const resData = await data.json();
    setRestaurantList(
      resData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredRestaurantList(
      resData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  return restaurantList?.length < 1 ? (
    <Loading />
  ) : (
    <div>
      <div className="container-fluid banner-restaurant px-0 flex">
        <div className="banner w-100">
          <div className="bg-Img"></div>
          <div className="search-food">
            <i className="fa fa-search-plus" aria-hidden="true"></i>
            <input
              type="text"
              className="form-control form-rounded"
              placeholder="Search For Restaurants..."
              value={searchText}
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
            ></input>
            <button
              className="btn btn-primary btn-search"
              onClick={() => {
                const filteredList = restaurantList.filter((list) =>
                  list?.info?.name
                    ?.toLowerCase()
                    .includes(searchText.toLowerCase())
                );
                setFilteredRestaurantList(filteredList);
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="body-restaurant">
        <div className="container-md restaurants py-5">
          <div className="filter-buttons">
            <button
              className="btn btn-primary my-3"
              onClick={() => {
                const filteredList = filteredRestaurantList.filter(
                  (list) => list?.info?.avgRating > 4
                );
                setFilteredRestaurantList(filteredList);
              }}
            >
              Top Rated Restaurants
            </button>
            <button
              className="btn btn-primary my-3"
              onClick={() => {
                //fetchData();
                setFilteredRestaurantList(restaurantList);
              }}
            >
              Clear
            </button>
          </div>
          <div className="row">
            {filteredRestaurantList.map((restaurantData) => (
              <div
                key={restaurantData.info.id}
                className="col-lg-3 col-md-4 col-sm-6 mb-3 d-flex align-items-stretch"
              >
                <Link
                  to={"/resturantinfo/" + restaurantData.info.id}
                  className="w-100"
                >
                  <RestaurantListComponent resList={restaurantData} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppBody;
