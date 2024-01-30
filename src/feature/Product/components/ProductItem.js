import { formattedNumber } from "utils/formats/formatNumber";

export default function ProductItem({ product }) {
  let avatar = product.productAvatars.find((item) => item.isDefault === true);

  return (
    <>
      <div className="group grid h-[330px] cursor-pointer grid-rows-2 rounded-sm border bg-white hover:border-primary">
        <div className="h-full w-full">
          <img
            className="h-full w-full object-cover"
            src={
              avatar
                ? avatar.fileUrl
                : require("assets/images/product-example.jpg")
            }
            alt=""
          />
        </div>
        <div className="flex w-full flex-col gap-3 p-2 text-sm">
          <div>
            <p className="line-clamp-2 overflow-hidden">
              {product.productName}
            </p>
          </div>
          <div>
            {product.minPrice === product.maxPrice ? (
              <p className="text-base text-primary">
                {formattedNumber(product.minPrice)}
              </p>
            ) : (
              <p className="text-base text-primary">
                {formattedNumber(product.minPrice)} ~{" "}
                {formattedNumber(product.maxPrice)}
              </p>
            )}
          </div>
          <div>
            <p className="text-xs">Đã bán 3,9k</p>
          </div>
          <div>
            <p className="text-xs">Nội địa</p>
          </div>
        </div>
        <div className="hidden w-full bg-primary py-2 text-center text-sm text-white group-hover:block">
          Tìm sản phẩm tương tự
        </div>
      </div>
    </>
  );
}
