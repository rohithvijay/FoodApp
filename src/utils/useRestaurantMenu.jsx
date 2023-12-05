import { useState,useEffect } from "react";
import { MENU_URL } from "./constants";


const useRestaurantMenu = (resid) => {
  
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  let [isExpand, setIsExpand] = useState(false);
  let [expandedIndex, setExpandedIndex] = useState(0);


  useEffect(() => {
    fetchRestaurantDetails();
  }, []);

  const fetchRestaurantDetails = async () => {
    const detailUrl = await fetch(MENU_URL + resid.resid);
    const json = await detailUrl.json();
    setRestaurantInfo(json.data);
  };
  return [restaurantInfo, isExpand, setIsExpand, expandedIndex, setExpandedIndex];
};

export default useRestaurantMenu;
