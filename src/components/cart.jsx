import { useSelector } from "react-redux";
import { ImgUrl } from "../utils/constants";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="card-items-list container-md">
        { cartItems.length !== 0 ? 
      (cartItems.map((item, index) => (
        <div key={index}>
          <div className="d-flex justify-content-between item-sub-card mb-5">
            <div>
              <h5>{item?.card?.info?.name}</h5>
              <p className="pb-3">
                <i className="fa fa-inr" aria-hidden="true"></i>
                {item?.card?.info?.price / 100}
              </p>
              <p className="item-description">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="item-img">
              <img src={ImgUrl + item?.card?.info?.imageId} alt="" />
            </div>
          </div>
        </div>
      ))) : <div className="d-flex justify-content-center item-sub-card mb-5"><h5>There is no product in the cart.</h5> </div>}
    </div>
  );
};
export default Cart;
