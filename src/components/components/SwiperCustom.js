import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/grid";
import React, { useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SwiperCustom({
  name,
  data,
  componentContent,
  spaceBetween,
  slidesPerView,
  slidesPerGroup,
  grid,
  loop,
}) {
  const swiperRef = useRef();

  const el = ".swiper-custom-pagination-" + name;
  const classNamePagination = "swiper-custom-pagination-" + name;
  let gridCustom = {};
  grid
    ? (gridCustom = {
        fill: "row",
        rows: 2,
      })
    : (gridCustom = {});

  return (
    <div className="flex flex-col gap-10">
      <div className="flex">
        <Swiper
          modules={[Grid, Navigation, Pagination]}
          spaceBetween={spaceBetween}
          slidesPerView={slidesPerView}
          slidesPerGroup={slidesPerGroup}
          grid={gridCustom}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={loop}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          pagination={{
            el: el,
            dynamicBullets: true,
            clickable: true,
            renderBullet: function (index, className) {
              return (
                '<span class="' + className + '">' + (index + 1) + "</span>"
              );
            },
          }}
        >
          {data &&
            data
              .slice(0)
              .reverse()
              .map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    {React.cloneElement(componentContent, { content: item })}
                  </SwiperSlide>
                );
              })}
          <div className="swiper-button-next-web" />
          <div className="swiper-button-prev-web" />
        </Swiper>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="rounded bg-white/10 p-1 text-white hover:bg-black"
        >
          <FontAwesomeIcon icon="fa-solid fa-caret-left" />
        </button>
        <div className="flex items-center justify-center ">
          {/* <div className="swiper-custom-pagination-web flex !translate-x-0 justify-center" /> */}
          <div
            className={`${classNamePagination} flex !translate-x-0 justify-center`}
          />
        </div>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="rounded bg-white/10 p-1 text-white hover:bg-black"
        >
          <FontAwesomeIcon icon="fa-solid fa-caret-right" />
        </button>
      </div>
    </div>
  );
}
