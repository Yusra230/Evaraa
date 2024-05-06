import FeaturedItem from "./FeaturedItem";
import { useSelector } from "react-redux";
import Slider from "./Slider";

const NewArrivals = () => {

  return <>
    <div className="container newArrivals-items-container">
      <h3 className="mb-3">
        <span className="color">New</span> Arrivals
      </h3>
      <div className="container">
        <Slider></Slider>
      </div>
    </div>

  </>
};

export default NewArrivals;
