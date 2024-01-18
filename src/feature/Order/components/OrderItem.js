export default function OrderItem() {
  return (
    <>
      <div className="grid grid-cols-10 items-center px-7 text-center text-sm">
        <div className="col-span-4">
          <div className="flex flex-row items-center justify-center">
            <div className="flex w-full flex-row items-center gap-5 text-left">
              <div className="h-10 w-10">
                <img
                  className="h-full w-full"
                  src={require("assets/images/product-example.jpg")}
                  alt=""
                />
              </div>
              <div>
                <p className="line-clamp-1 overflow-hidden">
                  Son dưỡng môi Dermal Therapy Lipbalm 10g giảm khô nứt nẻ môi{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 text-left">Size: M</div>
        <div>150.000</div>
        <div>1</div>
        <div className="col-span-2 text-right">150.000</div>
      </div>
    </>
  );
}
