export default function SideBar() {
  return (
    <>
      <div className="flex w-[180px] flex-col gap-7 text-left">
        <div className="flex items-center justify-center">
          <div className="">
            <img
              className="border-1 h-11 w-11 rounded-full border align-middle"
              src={require("assets/images/icon-logo/account.png")}
              alt=""
            />
          </div>
          <div className="text-sm">
            <div className="text-center font-semibold">username</div>
            <div className="text-gray-600">
              <a href="/user/info">
                <i className="fa-solid fa-pen text-xs"></i> Sửa hồ sơ
              </a>
            </div>
          </div>
        </div>
        <div className="h-[0.5px] w-full bg-black/10"></div>
        <div className="text-sm capitalize">
          <a href="/user/info" className="hover:text-primary">
            <div className="mb-4 flex flex-row">
              <div className="mr-3">
                <i className="fa-solid fa-user"></i>
              </div>
              <div>Tài khoản của tôi</div>
            </div>
          </a>
          <a href="/user/address" className="hover:text-primary">
            <div className="mb-4 flex flex-row">
              <div className="mr-3">
                <i className="fa-solid fa-address-book"></i>
              </div>
              <div>Địa chỉ</div>
            </div>
          </a>
          <a href="/user/password" className="hover:text-primary">
            <div className="mb-4 flex flex-row">
              <div className="mr-3">
                <i className="fa-solid fa-key"></i>
              </div>
              <div>Đổi mật khẩu</div>
            </div>
          </a>
          <a href="/user/purchase" className="hover:text-primary">
            <div className="mb-4 flex flex-row">
              <div className="mr-3">
                <i className="fa-brands fa-shopify"></i>
              </div>
              <div>Đơn mua</div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
