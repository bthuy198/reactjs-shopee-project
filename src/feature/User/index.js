import NavBar from "feature/Primary/header/NavBar";
import HeaderSearch from "feature/Primary/header/HeaderSearch";
import Footer from "feature/Primary/Footer";
import BorderLine from "feature/Primary/BorderLine";
import SideBar from "./components/SideBar";
import UserInfoForm from "./components/UserInfoForm";
import AddressList from "./components/AddressList";
import PassWord from "./components/PassWord";
import OrderList from "./components/OrderList";
export default function User({ title }) {
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
              <SideBar />
            </div>
            {title === "info" && (
              <div className="w-full rounded border bg-white px-7 py-3">
                <UserInfoForm />
              </div>
            )}
            {title === "address" && (
              <div className="w-full rounded border bg-white px-7 py-3">
                <AddressList />
              </div>
            )}
            {title === "password" && (
              <div className="w-full rounded border bg-white px-7 py-3">
                <PassWord />
              </div>
            )}
            {title === "purchase" && (
              <div className="w-full  px-7 py-3">
                <OrderList />
              </div>
            )}
          </div>
        </div>
      </div>
      <BorderLine />
      <Footer />
    </>
  );
}
