import NavBar from "feature/Primary/header/NavBar";
import HeaderSearch from "feature/Primary/header/HeaderSearch";
import Footer from "feature/Primary/Footer";
import BorderLine from "feature/Primary/BorderLine";
import SearchFilter from "./components/SearchFilter";
import ProductList from "./components/ProductList";
export default function Product() {
  return (
    <>
      <div className="bg-primary">
        <div className="mx-auto max-w-[1200px]">
          <NavBar />
          <HeaderSearch />
        </div>
      </div>
      <div className="bg-[#fbfbfb]">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex shrink-0 gap-7 pb-12 pt-5">
            <div className="flex shrink-0 py-3">
              <SearchFilter />
            </div>
            <div className="w-full px-7 py-3">
              <ProductList />
            </div>
          </div>
        </div>
      </div>
      <BorderLine />
      <Footer />
    </>
  );
}
