import NavBar from "feature/Primary/header/NavBar";
import HeaderSearch from "feature/Primary/header/HeaderSearch";
import Footer from "feature/Primary/Footer";
import BorderLine from "feature/Primary/BorderLine";
import SearchFilter from "feature/Product/components/SearchFilter";
import ProductList from "feature/Product/components/ProductList";
import { useDispatch, useSelector } from "react-redux";

import { fetchProductsData } from "feature/Product/productSlice";
import { useEffect, useRef, useState } from "react";
import { fetchCategoriesData } from "feature/Primary/Body/categorySlice";

export default function Product() {
  const productData = useSelector((state) => state.productData.data);
  const categoryData = useSelector((state) => state.categoryData);
  // console.log("categoryData", categoryData);
  const dispatch = useDispatch();

  const [state, setState] = useState({
    keyWord: "",
    categoryId: [],
    minPrice: null,
    maxPrice: null,
    currentPage: 0,
  });

  const minPriceRef = useRef(null);
  const maxPriceRef = useRef(null);
  const keywordRef = useRef(null);
  // const [minPrice, setMinPrice] = useState(productFilterReqDTO.minPrice);
  // const [maxPrice, setMaxPrice] = useState(productFilterReqDTO.maxPrice);

  const handleCheckbox = (event) => {
    const { value, checked } = event.target;
    let selectedCheckbox = state.categoryId;
    if (checked) {
      setState({
        ...state,
        categoryId: [...selectedCheckbox, +value],
      });
    } else {
      setState({
        ...state,
        categoryId: selectedCheckbox.filter((item) => item !== +value),
      });
    }
  };

  const handleDeselectAll = () => {
    setState({
      ...state,
      categoryId: [],
      minPrice: null,
      maxPrice: null,
    });
    minPriceRef.current.value = "";
    maxPriceRef.current.value = "";
    console.log("state delete all", state);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("state before", state);

    setState({
      ...state,
      minPrice: minPriceRef.current?.value,
      maxPrice: maxPriceRef.current?.value,
      keyWord: keywordRef.current?.value,
    });
  };

  useEffect(() => {
    // Thực hiện công việc khi state thay đổi
    console.log("minPriceRef", minPriceRef.current?.value);
    console.log("state after", state);
    dispatch(fetchProductsData(state));
  }, [state]); // Thực hiện công việc mỗi khi state thay đổi

  const fetchData = () => {
    console.log("productFilterReqDTO", state);
    dispatch(fetchProductsData(state));
    dispatch(fetchCategoriesData());
  };

  useEffect(() => {
    fetchData();
  }, [state.categoryId]);

  return (
    <>
      <div className="bg-primary">
        <div className="mx-auto max-w-[1200px]">
          <NavBar />
          <HeaderSearch keywordRef={keywordRef} handleSubmit={handleSubmit} />
        </div>
      </div>
      <div className="bg-[#fbfbfb]">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex shrink-0 gap-7 pb-12 pt-5">
            <div className="flex shrink-0 py-3">
              <SearchFilter
                categories={categoryData.data}
                handleCheckbox={handleCheckbox}
                handleDeselectAll={handleDeselectAll}
                handleSubmit={handleSubmit}
                minPriceRef={minPriceRef}
                maxPriceRef={maxPriceRef}
              />
            </div>
            <div className="w-full px-7 py-3">
              <ProductList products={productData} keyword={state.keyWord} />
            </div>
          </div>
        </div>
      </div>
      <BorderLine />
      <Footer />
    </>
  );
}
