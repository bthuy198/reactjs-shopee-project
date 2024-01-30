import NavBar from "feature/Primary/header/NavBar";
import HeaderSearch from "feature/Primary/header/HeaderSearch";
import Category from "feature/Primary/Body/Category";
import Footer from "feature/Primary/Footer";
import ProductItem from "feature/Product/components/ProductItem";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllProductsData } from "feature/Product/productSlice";
import { fetchCategoriesData } from "feature/Primary/Body/categorySlice";
import { useEffect } from "react";
export default function Home() {
  const products = useSelector((state) => state.productData.data);
  const categoriesList = useSelector((state) => state.categoryData.data);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = () => {
      dispatch(fetchAllProductsData());
      dispatch(fetchCategoriesData());
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="bg-primary">
        <div className="mx-auto max-w-[1200px]">
          <NavBar />
          <HeaderSearch />
        </div>
      </div>
      <div className="flex flex-col gap-7 bg-[#fbfbfb] pt-5">
        <div className="mx-auto w-[1200px] border bg-white">
          <Category className="w-full" categories={categoriesList} />
        </div>
        <div className="mx-auto w-full max-w-[1200px] border border-b-4 border-b-primary bg-white py-3 text-center uppercase">
          <h1 className="text-xl font-semibold text-primary">All Products</h1>
        </div>
        <div className="mx-auto w-full  max-w-[1200px]">
          <div className="grid grid-cols-6 gap-2">
            {products &&
              products.map((item) => (
                <ProductItem product={item} key={item.id} />
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
