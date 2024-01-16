import NavBar from "feature/Primary/header/NavBar";
import HeaderSearch from "feature/Primary/header/HeaderSearch";
import Footer from "feature/Primary/Footer";
import BorderLine from "feature/Primary/BorderLine";
import ProductPage from "./components/ProductPage";
export default function Detail() {
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
          <ProductPage />
        </div>
      </div>
      <BorderLine />
      <Footer />
    </>
  );
}
