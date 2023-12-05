const AppBanner = () => {
  return (
    <div className="container-fluid banner-restaurant px-0">
      <div className="banner w-100">
        <div className="bg-Img"></div>
        <div className="search-food">
          <i className="fa fa-search-plus" aria-hidden="true"></i>
          <input
            type="text"
            className="form-control form-rounded"
            placeholder="Search For Restaurants..."
          ></input>
        </div>
      </div>
    </div>
  );
};
export default AppBanner;
