import ProductItem from "feature/Product/components/ProductItem";

export default function ProductList() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div>
          Kết quả tìm kiếm cho từ khoá '
          <span className="text-primary">123</span>'
        </div>
        <div className="flex w-full items-center bg-[#eaeaea] px-6 py-4">
          <div className="w-1/6">Sắp xếp theo</div>
          <div className="flex w-4/6 gap-4 text-sm">
            <button className="appearance-none rounded-sm bg-primary px-6 py-2 capitalize text-white">
              liên quan
            </button>
            <button className="appearance-none rounded-sm border bg-white px-6 py-2 capitalize text-black">
              bán chạy
            </button>
          </div>
          <div className="grid w-1/6 grid-cols-3 items-center text-right">
            <div>1/10</div>
            <div className="col-span-2 flex justify-end">
              <div className="border-[#black] text-xs">
                <a href="">
                  <i class="fa-solid fa-less-than"></i>
                </a>
              </div>
              <div className="border text-xs">
                <a href="">
                  <i class="fa-solid fa-greater-than"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2">
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </>
  );
}
