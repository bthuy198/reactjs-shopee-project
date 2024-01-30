import NavBar from "feature/Primary/header/NavBar";
import HeaderSearch from "feature/Primary/header/HeaderSearch";
import Footer from "feature/Primary/Footer";
import BorderLine from "feature/Primary/BorderLine";
import ProductPage from "./components/ProductPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProductById } from "feature/Product/productSlice";
import { useParams } from "react-router-dom";
export default function Detail() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  // const product = useSelector((state) => state.data);
  const product = useSelector((state) => state.productData.product);

  useEffect(() => {
    dispatch(fetchProductById(+productId));
  }, [dispatch, productId]);

  return (
    <>
      <div className="bg-primary">
        <div className="mx-auto max-w-[1200px]">
          <NavBar />
          <HeaderSearch />
        </div>
      </div>
      <div className="bg-[#fbfbfb]">
        <div className="men_men mx-auto max-w-[1200px]">
          {product && <ProductPage product={product} />}
        </div>
      </div>
      <BorderLine />
      <Footer />
    </>
  );
}
