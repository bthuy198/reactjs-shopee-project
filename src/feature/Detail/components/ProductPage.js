import { Navigation } from "swiper/modules";
import { formattedNumber } from "utils/formats/formatNumber";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function ProductPage({ product }) {
  console.log("productDetails men", product.productDetails);
  let productDetail = product.productDetails;
  let category = product.category;

  let avatar =
    product.productAvatars &&
    product.productAvatars.find((item) => item.isDefault === true);

  let firstSlideImageSource =
    product.productAvatars && product.productAvatars[0].fileUrl;
  console.log("First slide image source:", firstSlideImageSource);
  const handleChooseSize = (e) => {
    let sizeId = e.target.dataset.id;
    let detail = productDetail.find((item) => item.size.id === +sizeId);
    document.getElementById("priceDiv").innerHTML = formattedNumber(
      detail.price,
    );
    e.target.classList.add("border-primary");
    e.target.classList.add("text-primary");
  };
  return (
    <>
      <div className="men_men2 mb-14 flex w-full flex-col gap-3">
        <div className="w-full p-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 rtl:space-x-reverse md:space-x-2">
              <li className="inline-flex items-center">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium text-[#0055AA] hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    className="me-2.5 h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Shopee
                </a>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="mx-1 h-3 w-3 text-gray-400 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <a
                    href="#"
                    className="ms-1 text-sm font-medium text-[#0055AA] hover:text-blue-600 dark:text-gray-400 dark:hover:text-white md:ms-2"
                  >
                    {category && `${category.categoryName}`}
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="mx-1 h-3 w-3 text-gray-400 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">
                    {product.productName}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        <div className="rounded-sm border bg-white">
          <div className="flex flex-row">
            <div className="flex w-[40%] flex-col items-center justify-center gap-3 p-2">
              <div className="w-full">
                <img
                  className="h-[450px] w-[450px] object-cover"
                  src={
                    avatar
                      ? avatar.fileUrl
                      : require("assets/images/product-example.jpg")
                  }
                  alt=""
                />
              </div>
              <div className="w-full shrink-0">
                {avatar && (
                  <>
                    <Swiper
                      navigation
                      pagination
                      modules={[Navigation]}
                      spaceBetween={5}
                      slidesPerView={5}
                    >
                      {product.productAvatars &&
                        product.productAvatars.map((item) => {
                          return (
                            <SwiperSlide className="h-20 w-20">
                              <img
                                className="h-full w-full object-cover"
                                src={item.fileUrl}
                                alt=""
                              />
                            </SwiperSlide>
                          );
                        })}
                    </Swiper>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                  </>
                )}
              </div>
            </div>

            <div className="w-[60%] p-4">
              <div className="flex flex-col gap-3">
                <div className="text-xl">{product.productName}</div>
                <div>155,3k đã bán</div>
                <div
                  id="priceDiv"
                  className="w-full bg-[#f5f5f5] px-6 py-3 text-3xl font-semibold text-primary"
                >
                  {product.minPrice && (
                    <>
                      {product.minPrice === product.maxPrice
                        ? formattedNumber(product.minPrice)
                        : `${formattedNumber(
                            product.minPrice,
                          )} - ${formattedNumber(product.maxPrice)}`}
                    </>
                  )}
                </div>
                <div className="flex">
                  <div className="w-[110px]">Vận chuyển</div>
                  <div>Miễn phí vận chuyển</div>
                </div>
                <div className="flex">
                  <div className="w-[110px]">Size</div>
                  <div className="grid w-[400px] grid-cols-4 items-center gap-4 text-center">
                    {productDetail &&
                      productDetail.map((e) => {
                        return e.quantity === 0 ? (
                          <div className="cursor-not-allowed border py-1 text-gray-400">
                            {e.size.size}
                          </div>
                        ) : (
                          <div
                            data-id={e.id}
                            onClick={handleChooseSize}
                            className="cursor-pointer border py-1 hover:border-primary hover:text-primary "
                          >
                            {e.size.size}
                          </div>
                        );
                      })}
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-[110px]">Số lượng</div>
                  <div className="mr-5 flex items-center justify-center">
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
                        placeholder="1"
                        required
                      />
                      <button
                        type="button"
                        id="decrement-button"
                        data-input-counter-decrement="quantity-input"
                        className="rounded-sm rounded-bl-none rounded-tl-none border border-l-0 border-gray-300 px-2 py-0.5 focus:outline-none"
                      >
                        <i className="fa-solid fa-plus text-xs"></i>
                      </button>
                    </div>
                  </div>
                  <div className="text-sm">106 sản phẩm có sẵn</div>
                </div>
                <div className="text-sm">
                  <button className="mr-4 h-12 appearance-none rounded-sm border border-primary bg-[rgba(255,87,34,0.1)] px-6 font-semibold capitalize text-primary">
                    <i className="fa-solid fa-cart-plus"></i>&nbsp;Thêm vào giỏ
                    hàng
                  </button>
                  <button className="h-12 appearance-none rounded-sm bg-primary px-12 font-semibold capitalize text-white">
                    Mua ngay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full border bg-white p-6">
          <div className="w-full bg-[#fbfbfb] p-2">
            <h3 className="text-lg uppercase">chi tiết sản phẩm</h3>
          </div>
          <div className="text-sm">
            <div className="flex items-center gap-2 py-1">
              <div className="w-[140px]">Danh mục</div>
              <div className="text-center">
                <nav className="flex" aria-label="Breadcrumb">
                  <ol className="inline-flex items-center space-x-1 rtl:space-x-reverse md:space-x-2">
                    <li className="inline-flex items-center">
                      <a
                        href="#"
                        className="inline-flex items-center text-sm font-medium text-[#0055AA] hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                      >
                        Shopee
                      </a>
                    </li>
                    <li>
                      <div className="flex items-center">
                        <svg
                          className="mx-1 h-3 w-3 text-gray-400 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 6 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                          />
                        </svg>
                        <a
                          href="#"
                          className="ms-1 text-sm font-medium text-[#0055AA] hover:text-blue-600 dark:text-gray-400 dark:hover:text-white md:ms-2"
                        >
                          {category && `${category.categoryName}`}
                        </a>
                      </div>
                    </li>
                    <li aria-current="page">
                      <div className="flex items-center">
                        <svg
                          className="mx-1 h-3 w-3 text-gray-400 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 6 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                          />
                        </svg>
                        <span className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">
                          {product.productName}
                        </span>
                      </div>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="flex items-center gap-2 py-1">
              <div className="w-[140px]">Điều kiện bảo quản</div>
              <div className="text-center">Điều kiện thường</div>
            </div>
            <div className="flex items-center gap-2 py-1">
              <div className="w-[140px]">Phong cách</div>
              <div className="text-center">Cơ bản, Tối giản</div>
            </div>
            <div className="flex items-center gap-2 py-1">
              <div className="w-[140px]">Số lượng</div>
              <div className="text-center">Cơ bản, Tối giản</div>
            </div>
          </div>
          <div className="w-full bg-[#fbfbfb] p-2">
            <h3 className="text-lg uppercase">mô tả sản phẩm</h3>
          </div>
          <div className="text-sm leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, praesentium. Quidem ex magnam debitis quisquam eligendi
            incidunt possimus, non eius odit, beatae totam sit ratione! Iusto,
            nisi beatae rem ab nam dolorum culpa quos atque necessitatibus,
            doloribus labore expedita nesciunt unde provident error! Distinctio,
            cum ut. Veniam, facilis. Quia, facere accusantium odio dolores
            aliquam unde ipsam quidem odit ab sed a natus placeat itaque omnis
            repellendus magni autem iure eos similique aliquid reiciendis
            voluptate amet illo illum! Repudiandae placeat inventore eos fuga
            voluptatem dignissimos aliquam maxime pariatur accusantium iure
            dolor earum unde perferendis, vel sequi, eligendi temporibus!
            Dolores, sunt quos.
          </div>
        </div>
      </div>
    </>
  );
}
