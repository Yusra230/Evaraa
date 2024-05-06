import { PiCrownSimple } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { BsCashCoin } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CartSliceActions } from "../store/cartSlice";
import { useRef } from "react";
import { WhishlistSliceActions } from "../store/whishlistSlice";
import { useState } from "react";
import { FaHeart } from "react-icons/fa6";

const ItemDetails = () => {
  scrollTo(0, 0);
  const [wishListClicked, setWishListClicked] = useState(false);

  const dispatch = useDispatch();
  const idElement = useRef();

  const addToCart = (itemId) => {
    const quantity = Number(idElement.current.value);
    console.log(`quantity : ${quantity}`);
    dispatch(CartSliceActions.addToBag({ id: itemId, quantity: Number(idElement.current.value) }));
  };

  const addToWishList = (itemId) => {
    const quantity = Number(idElement.current.value);
    console.log(`quantity : ${quantity}`);
    setWishListClicked(true);
    dispatch(WhishlistSliceActions.addToWishList({ id: itemId, quantity: Number(idElement.current.value) }));
  };

  const products = useSelector((store) => store.products);
  const params = useParams();

  const id = Number(params.id);
  // console.log(products[0].id);
  // console.log(typeof id);

  const foundProduct = products.find((product) => product.id === id);

  if (foundProduct) {
    console.log("foundProduct Found:", foundProduct);
  } else {
    console.log("Product not found with ID:", id);
  }

  const [image, setImage] = useState(false);

  const setImages = (imgIndex) => {
    console.log(imgIndex);
    setImage(imgIndex);
  }



  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-2">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-5 text-center text-lg-start mb-3">
          <img src={image ? foundProduct.images[image] : foundProduct.images[0]} alt="" class="img-fluid " width="700" height="500" />
          <div className="multiple-images-container">
            <img src={foundProduct.images[1]} onClick={() => setImages(1)} alt="" class="img-fluid multiple-images" width="100" height="100" />
            <img src={foundProduct.images[2]} onClick={() => setImages(2)} alt="" class="img-fluid multiple-images" width="100" height="100" />
            <img src={foundProduct.images[0]} onClick={() => setImages(0)} alt="" class="img-fluid multiple-images" width="100" height="100" /></div>
        </div>


        <div className="col-md-10 mx-auto col-lg-7">
          <h2 className="fw-bold lh-1 text-body-emphasis mb-3">
            {foundProduct.title}
          </h2>
          <p>
            Brand: <span>{foundProduct.brand}</span>
          </p>
          <div className="price item-price">
            <span className="current-price c-price">{foundProduct.price}</span>
            <span className="original-price">$100</span>
            <span className="discount">
              {foundProduct.discountPercentage} OFF
            </span>
          </div>
          <p className="">{foundProduct.description}</p>
          <p>
            <PiCrownSimple /> 1 year Brand Warranty
          </p>
          <p>
            <TbTruckDelivery /> 30 Days Delivery Policy
          </p>
          <p>
            <BsCashCoin /> Cash on Delivery Available
          </p>
          <input type="number" name="" id="" ref={idElement} className="quantity" defaultValue={1} />
          <button className="btn shop-now-btn" onClick={() => {
            addToCart(id);
          }} >Add to Cart</button>
          <button className="btn" onClick={() => {
            addToWishList(id);
          }}>
            {wishListClicked ? <FaHeart className="WhishlistIcon" /> : <FaRegHeart className="WhishlistIcon" />}
          </button>
          <p className="text-secondary py-1"><span className="fw">Availibilty: </span>Items in stock</p>
        </div>
      </div>
    </div>

    // <div class="container col-xl-10 col-xxl-8 px-4 py-5">
    //   <div class="row align-items-center g-lg-5 py-5">
    //     <div class="col-lg-5 text-center text-lg-start">
    //       <img src={foundProduct.images[0]} class="img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
    //     </div>

    //     <div class="col-md-10 mx-auto col-lg-7 text-lg-start">
    //       <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary ">
    //         <div class="form-floating mb-3">
    //           <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" fdprocessedid="jm2gvk" />
    //           <label for="floatingInput">Email address</label>
    //         </div>
    //         <div class="form-floating mb-3">
    //           <input type="password" class="form-control" id="floatingPassword" placeholder="Password" fdprocessedid="827e08" />
    //           <label for="floatingPassword">Password</label>
    //         </div>
    //         <div class="checkbox mb-3">
    //           <label>
    //             <input type="checkbox" value="remember-me" /> Remember me
    //           </label>
    //         </div>
    //         <button class="w-100 btn btn-lg btn-primary" type="submit" fdprocessedid="a1f78i">Sign up</button>
    //         <hr class="my-4" />
    //         <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ItemDetails;
