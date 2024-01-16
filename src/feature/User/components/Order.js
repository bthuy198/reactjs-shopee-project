export default function Order() {
  return (
    <>
      <div className="flex flex-col border bg-white shadow-sm">
        <div className="flex w-full justify-end gap-3 p-5">
          <div className="text-sm text-green-800">
            <i class="fa-solid fa-van-shuttle"></i>&nbsp; Đơn hàng đã được giao
            thành công &nbsp;
            <i className="fa-regular fa-circle-question"></i>
          </div>
          <div className="border-l"></div>
          <div className="font-semibold uppercase text-primary">hoàn thành</div>
        </div>
        <div className="h-[0.5px] w-full bg-black/10"></div>
        <div className="flex flex-row items-center p-4 text-center">
          <div className="w-[10%] ">
            <img
              className="h-20 w-20"
              src={require("assets/images/product-example.jpg")}
              alt=""
            />
          </div>
          <div className="w-[75%] text-left">
            <p className="text-lg">Bảng mắt</p>
            <p className="text-sm">Phân loại hàng</p>
            <p className="text-sm">x1</p>
            <button className="rounded-sm border border-primary bg-white px-2 py-0.5 text-xs text-primary">
              7 ngày trả hàng
            </button>
          </div>
          <div className="w-[15%] text-right text-base text-primary">
            150.000
          </div>
        </div>
        <div className="h-[0.5px] w-full bg-black/10"></div>
        <div className="flex flex-row items-center justify-end gap-3 bg-[#fbfbfb] p-5 text-center">
          <div className="text-sm">Thành tiền</div>
          <div className="text-xl font-semibold text-primary">150.000</div>
        </div>
        <div className="grid grid-cols-2 items-center bg-[#fbfbfb] p-5">
          <div className=" text-sm">
            Đánh giá sản phẩm trước Đánh giá ngay và nhận 200 Xu
          </div>
          <div className="grid grid-cols-3 gap-2 text-sm">
            <button className="rounded-sm bg-primary px-1 py-2.5 capitalize text-white">
              Đánh giá
            </button>
            <button className="rounded-sm border px-1 py-2.5 capitalize">
              Liên hệ người bán
            </button>
            <button className="rounded-sm border px-1 py-2.5  capitalize ">
              Mua lại
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
