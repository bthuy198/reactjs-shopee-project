import CategoryItem from "./CategoryItem";

export default function SearchFilter() {
  return (
    <>
      <div className="flex w-[180px] flex-col gap-4 text-left">
        <div className="font-semibold uppercase">bộ lọc tìm kiếm</div>
        <div className="text-sm capitalize">
          <p className="py-3 text-base capitalize">theo danh mục</p>
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </div>
        <div className="h-[0.5px] w-full bg-black/10"></div>
        <div className="flex flex-col gap-3 text-sm capitalize">
          <p className="text-base capitalize">khoảng giá</p>
          <div className="flex w-full items-center">
            <div className="w-5/12 text-left">
              <input
                type="text"
                id="quantity-input"
                data-input-counter
                aria-describedby="helper-text-explanation"
                className="w-full border border-gray-300 py-1 text-center text-sm focus:outline-none"
                placeholder="999"
                required
              />
            </div>
            <div className=" flex w-2/12 items-center justify-center">
              <div className="h-[1px] w-1/2 border border-[#bdbdbd]"></div>
            </div>
            <div className="w-5/12 text-right">
              <input
                type="text"
                id="quantity-input"
                data-input-counter
                aria-describedby="helper-text-explanation"
                className="w-full border border-gray-300 py-1 text-center text-sm focus:outline-none"
                placeholder="999"
                required
              />
            </div>
          </div>
          <button className="w-full appearance-none rounded-sm bg-primary py-2 font-semibold uppercase text-white">
            áp dụng
          </button>
        </div>
        <div className="h-[0.5px] w-full bg-black/10"></div>
        <div>
          <div className="py-3">
            <button className="w-full appearance-none rounded-sm bg-primary py-2 font-semibold uppercase text-white">
              xoá tất cả
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
