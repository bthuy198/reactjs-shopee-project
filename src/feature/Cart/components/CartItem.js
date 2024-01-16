export default function CartItem() {
  return (
    <>
      <div className="mx-auto mt-5 h-32 max-w-[1200px] border bg-white px-5 text-sm">
        <div className="flex h-full flex-row items-center justify-center">
          <div className="flex w-1/2 flex-row items-center justify-center">
            <div className="w-1/12 ">
              <input
                id="checked-checkbox"
                type="checkbox"
                value=""
                className="rounded-xs h-5 w-5 accent-primary"
              />
            </div>
            <div className="flex w-11/12 flex-row items-center justify-center">
              <div>
                <img
                  className="h-20 w-20"
                  src={require("assets/images/product-example.jpg")}
                  alt=""
                />
              </div>
              <div className="grid w-full grid-cols-2 px-2">
                <div>Phân loại hàng</div>
                <div>Phân loại hàng</div>
              </div>
            </div>
          </div>
          <div className="grid w-1/2 grid-cols-4 items-center justify-center text-center">
            <div>150.000</div>
            <div className="flex items-center justify-center">
              <form className="mx-auto">
                <div className="relative flex">
                  <button
                    type="button"
                    id="decrement-button"
                    data-input-counter-decrement="quantity-input"
                    className="rounded-sm rounded-br-none rounded-tr-none border border-r-0 border-gray-300 px-2 py-0.5 focus:outline-none focus:ring-2 focus:ring-gray-100"
                  >
                    <i className="fa-solid fa-minus text-xs"></i>
                  </button>
                  <input
                    type="text"
                    id="quantity-input"
                    data-input-counter
                    aria-describedby="helper-text-explanation"
                    className="w-12 border border-gray-300 px-2 py-1 text-center text-sm focus:outline-none"
                    placeholder="999"
                    required
                  />
                  <button
                    type="button"
                    id="decrement-button"
                    data-input-counter-decrement="quantity-input"
                    class="rounded-sm rounded-bl-none rounded-tl-none border border-l-0 border-gray-300 px-2 py-0.5 focus:outline-none"
                  >
                    <i className="fa-solid fa-plus text-xs"></i>
                  </button>
                </div>
              </form>
            </div>
            <div className="font-semibold text-primary">150.000</div>
            <div>Xoá</div>
          </div>
        </div>
      </div>
    </>
  );
}
