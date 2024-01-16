export default function CartTotal() {
  return (
    <>
      <div className="mx-auto mt-5 max-w-[1200px] border bg-white px-5 text-lg">
        <div className="grid h-14 grid-cols-2 items-center justify-center">
          <div className="flex flex-row">
            <div className="w-1/12">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="rounded-xs h-5 w-5 accent-primary"
              />
            </div>
            <div className="grid w-11/12 grid-cols-6 items-center justify-center text-center">
              <div className="col-span-2 capitalize">Chọn tất cả</div>
              <div>Xoá</div>
              <div className="col-span-3">Bỏ sản phẩm không hoạt động</div>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center justify-center text-center">
            <div className="">Tổng thanh toán</div>
            <div className="text-2xl font-semibold text-primary">150.000</div>
            <div className="col-span-2">
              <button className="appearance-none rounded-sm bg-primary px-16 py-2 text-base font-semibold capitalize text-white">
                Mua Hàng
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
