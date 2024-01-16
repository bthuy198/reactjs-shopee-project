export default function AddressItem() {
  return (
    <>
      <div className="h-full w-full py-4 text-sm">
        <div className="flex w-full flex-col">
          <div className="grid grid-cols-2 text-base ">
            <div className="flex flex-row">
              <div>
                <h3 className="font-semibold">Bích Thuỷ</h3>
              </div>
              <div className="mx-3 border-l"></div>
              <div>0782098144</div>
            </div>
            <div className="text-right text-sm">
              <a href="#" className="">
                Cập nhật
              </a>
              <a href="#" className="ml-3">
                Xoá
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 text-sm">
            <div>Hue, VietNam</div>
            <div className="text-right">
              <button className="rounded-sm border bg-white px-3 py-1 capitalize text-black hover:shadow focus:shadow">
                Thiết lập mặc định
              </button>
            </div>
          </div>
          <div>
            <button className="rounded-sm border border-primary bg-white px-2 py-0.5 text-xs text-primary">
              Mặc định
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
