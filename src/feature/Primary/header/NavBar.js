import ItemNavBar from "./ItemNavBar";
export default function NavBar() {
  return (
    <>
      <div className="grid grid-cols-5 bg-primary py-1 text-default">
        <div className="col-span-2 grid grid-cols-5 divide-x divide-gray-100">
          <ItemNavBar>Kênh người bán</ItemNavBar>
          <div className="col-span-2 flex cursor-pointer items-center justify-center text-sm hover:text-orange-100">
            Trở thành người bán Shopee
          </div>
          <ItemNavBar>Tải ứng dụng</ItemNavBar>
          <div className="flex w-full cursor-pointer">
            <div className="flex w-1/2 items-center justify-center text-sm hover:text-orange-100">
              Kết nối
            </div>
            <div className="flex w-1/2 items-center justify-end text-sm">
              <i className="fa-brands fa-facebook flex w-1/2 items-center"></i>
              <i className="fa-brands fa-instagram flex w-1/2 items-center"></i>
            </div>
          </div>
        </div>
        <div></div>
        <div className="col-ends-4 col-span-2 grid grid-cols-5">
          <ItemNavBar>Thông báo</ItemNavBar>
          <ItemNavBar>
            <i className="fa-regular fa-circle-question"></i>&nbsp; Hỗ trợ
          </ItemNavBar>
          <ItemNavBar>
            <i className="fa-solid fa-globe"></i>&nbsp; Tiếng Việt
            <i className="fa-solid fa-angle-down"></i>
          </ItemNavBar>
          <div className="col-ends-6 col-span-2 flex w-full cursor-pointer items-center justify-center divide-x text-sm hover:text-orange-100">
            <div className="flex w-1/2 justify-center">Đăng ký</div>
            <div className="flex w-1/2 justify-center">Đăng nhập</div>
          </div>
        </div>
      </div>
    </>
  );
}
