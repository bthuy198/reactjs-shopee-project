import NavBar from "feature/Primary/header/NavBar";
import HeaderSearch from "feature/Primary/header/HeaderSearch";
import Category from "feature/Primary/Body/Category";
import Footer from "feature/Primary/Footer";
import Auth from "feature/Auth";

export default function App() {
  return (
    <>
      {/* <div className="bg-primary">
        <div className="mx-auto max-w-[1200px]">
          <NavBar />
          <HeaderSearch />
        </div>
      </div>
      <div className="bg-[#fbfbfb] pt-5">
        <div className="mx-auto max-w-[1200px] border bg-white">
          <Category />
        </div>
      </div>
      <Footer /> */}
      <Auth></Auth>
    </>
  );
}
