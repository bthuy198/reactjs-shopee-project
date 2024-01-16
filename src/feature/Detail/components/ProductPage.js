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
              <div className="w-full shrink-0 overflow-hidden">
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
              </div>
            </div>

            <div className="w-[60%] p-4">123</div>
          </div>
        </div>
      </div>
    </>
  );
}
