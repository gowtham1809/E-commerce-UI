import React, { useEffect,} from "react";
// import axios from "axios";
import styles from "./home.module.scss";
import { useDispatch } from "react-redux";
import{actions} from "./slice/slice"
import { useSelector } from "react-redux";
import { selectProducts } from "./slice/selector";
import { selectAuthUser } from "../../context/auth/selector";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts)
  const user = useSelector(selectAuthUser)

  useEffect(() => {
    dispatch(actions.getProducts());
  }, []);
  const handleAddToCard = (product) => {

      dispatch(actions.addProductToCards({productId:product?._id,userId:user?._id || "",}))
  }
  // const ProductInc = (product) => {
  //   if (0 < product.remaining)
  //     axios
  //       .put(`http://localhost:5000/api/post/${product._id}`, {
  //         ...product,
  //         remaining: product.remaining - 1,
  //       })
  //       .then((res) => {
  //         console.log("product count added");
  //         fetchProducts();
  //       })
  //       .catch((error) => {
  //         console.error("adding product:", error);
  //       });

  //   axios
  //     .post(`http://localhost:5000/api/cards`, {
  //       userId: "",
  //       productId: product._id,
  //     })
  //     .then((res) => {
  //       console.log("card added");
  //     });
  // };

  // const ProductDec = (product) => {
  //   if (product.count > product.remaining)
  //     axios
  //       .put(`http://localhost:5000/api/post/${product._id}`, {
  //         ...product,
  //         remaining: product.remaining + 1,
  //       })
  //       .then((res) => {
  //         console.log("product count decrease");
  //         fetchProducts();
  //       })
  //       .catch((error) => {
  //         console.error("decrease product:", error);
  //       });
  // };
  return (
    <div>
      <div className={styles.card_container}>
        {products?.map((product) => {
          return (
            <div className={styles.card}>
              <p>Name: {product.name}</p>
              <p>Price: {product.price}</p>
              <p>Description: {product.description}</p>
              <button  onClick={()=>handleAddToCard(product)}>Add to card</button>
              {/* <span>{ product.remaining}</span>
                  <button onClick={()=>ProductDec(product)}>-</button> */}
              <hr></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
