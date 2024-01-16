import AddressItem from "./AddressItem";

export default function AddressList() {
  return (
    <>
      <div className="flex flex-col items-center gap-7 text-lg">
        <div className="flex w-full flex-row items-center justify-center pb-2">
          <div className="w-1/2 text-left">
            <h1 className="font-semibold capitalize">Địa chỉ của tôi</h1>
          </div>
          <div className="w-1/2 text-right text-sm font-semibold">
            <button className="rounded-sm bg-primary px-6 py-2 text-white">
              <i className="fa-solid fa-plus"></i>&nbsp; Thêm địa chỉ mới
            </button>
          </div>
        </div>
        <div className="h-[0.5px] w-full bg-black/10"></div>
        <div className="w-full divide-y">
          <AddressItem />
          <AddressItem />
          <AddressItem />
          <AddressItem />
        </div>
      </div>
    </>
  );
}
