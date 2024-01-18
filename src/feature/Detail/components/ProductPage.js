import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function ProductPage() {
  return (
    <>
      <div className="mb-14 flex w-full flex-col gap-3">
        <div className="w-full p-4">
          <nav className="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 rtl:space-x-reverse md:space-x-2">
              <li class="inline-flex items-center">
                <a
                  href="#"
                  class="inline-flex items-center text-sm font-medium text-[#0055AA] hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    class="me-2.5 h-3 w-3"
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
                <div class="flex items-center">
                  <svg
                    class="mx-1 h-3 w-3 text-gray-400 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <a
                    href="#"
                    class="ms-1 text-sm font-medium text-[#0055AA] hover:text-blue-600 dark:text-gray-400 dark:hover:text-white md:ms-2"
                  >
                    Category 1
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div class="flex items-center">
                  <svg
                    class="mx-1 h-3 w-3 text-gray-400 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">
                    Product 1
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
                  src={require("assets/images/product-detail.jpg")}
                  alt=""
                />
              </div>
              <div className="w-full shrink-0">
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={5}
                  slidesPerView={5}
                  navigation
                >
                  <SwiperSlide>
                    <div className="h-20 w-20">
                      <img
                        className="h-full w-full object-cover"
                        src={require("assets/images/product-example.jpg")}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="h-20 w-20">
                      <img
                        className="h-full w-full object-cover"
                        src={require("assets/images/product-example.jpg")}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="h-20 w-20">
                      <img
                        className="h-full w-full object-cover"
                        src={require("assets/images/product-detail.jpg")}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="h-20 w-20">
                      <img
                        className="h-full w-full object-cover"
                        src={require("assets/images/product-example.jpg")}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="h-20 w-20">
                      <img
                        className="h-full w-full object-cover"
                        src={require("assets/images/product-example.jpg")}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="h-20 w-20">
                      <img
                        className="h-full w-full object-cover"
                        src={require("assets/images/product-example.jpg")}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="h-20 w-20">
                      <img
                        className="h-full w-full object-cover"
                        src={require("assets/images/product-example.jpg")}
                        alt=""
                      />
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </div>

            <div className="w-[60%] p-4">
              <div className="flex flex-col gap-3">
                <div className="text-xl">
                  Gel rửa mặt BHA Compliment No Problem làm sạch sâu, giảm viêm
                  & mụn 200ml
                </div>
                <div>155,3k đã bán</div>
                <div className="w-full bg-[#f5f5f5] px-6 py-3 text-3xl font-semibold text-primary">
                  150.000
                </div>
                <div className="flex">
                  <div className="w-[110px]">Vận chuyển</div>
                  <div>Miễn phí vận chuyển</div>
                </div>
                <div className="flex">
                  <div className="w-[110px]">Size</div>
                  <div className="grid w-[400px] grid-cols-4 items-center gap-4 text-center">
                    <div className="border py-1">S</div>
                    <div className="border py-1">M</div>
                    <div className="border py-1">L</div>
                    <div className="border py-1">XL</div>
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
                  </div>
                  <div className="text-sm">106 sản phẩm có sẵn</div>
                </div>
                <div className="text-sm">
                  <button className="mr-4 h-12 appearance-none rounded-sm border border-primary bg-[rgba(255,87,34,0.1)] px-6 font-semibold capitalize text-primary">
                    <i class="fa-solid fa-cart-plus"></i>&nbsp;Thêm vào giỏ hàng
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
                  <ol class="inline-flex items-center space-x-1 rtl:space-x-reverse md:space-x-2">
                    <li class="inline-flex items-center">
                      <a
                        href="#"
                        class="inline-flex items-center text-sm font-medium text-[#0055AA] hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                      >
                        Shopee
                      </a>
                    </li>
                    <li>
                      <div class="flex items-center">
                        <svg
                          class="mx-1 h-3 w-3 text-gray-400 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 6 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 9 4-4-4-4"
                          />
                        </svg>
                        <a
                          href="#"
                          class="ms-1 text-sm font-medium text-[#0055AA] hover:text-blue-600 dark:text-gray-400 dark:hover:text-white md:ms-2"
                        >
                          Category 1
                        </a>
                      </div>
                    </li>
                    <li aria-current="page">
                      <div class="flex items-center">
                        <svg
                          class="mx-1 h-3 w-3 text-gray-400 rtl:rotate-180"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 6 10"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 9 4-4-4-4"
                          />
                        </svg>
                        <span class="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 md:ms-2">
                          Product 1
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
          <div></div>
        </div>
      </div>
    </>
  );
}
