import Order from "./Order";

export default function OrderList() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="border bg-white shadow-sm">
          <div className="grid grid-cols-7 items-center justify-center text-center">
            <div className="w-full px-3 py-3">
              <a className="hover:text-primary" href="">
                Tất cả
              </a>
            </div>
            <div className="w-full">
              <a className="hover:text-primary" href="">
                Chờ thanh toán
              </a>
            </div>
            <div className="w-full">
              <a className="hover:text-primary" href="">
                Vận chuyển
              </a>
            </div>
            <div className="w-full">
              <a className="hover:text-primary" href="">
                Chờ giao hàng
              </a>
            </div>
            <div className="w-full">
              <a className="hover:text-primary" href="">
                Hoàn thành
              </a>
            </div>
            <div className="w-full">
              <a className="hover:text-primary" href="">
                Đã huỷ
              </a>
            </div>
            <div className="w-full">
              <a className="hover:text-primary" href="">
                Trả hàng/Hoàn tiền
              </a>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#eaeaea]">
          <i className="fa-solid fa-magnifying-glass w-[3%] pl-3 text-center"></i>
          <input
            type="text"
            className=" h-full w-[97%] bg-[#eaeaea] p-2 py-3 text-sm outline-none"
            placeholder="Bạn có thể tìm kiếm theo tên ID đơn hàng hoặc Tên Sản phẩm"
          />
        </div>
        <Order />
        <Order />
        <Order />
      </div>
    </>
  );
}
