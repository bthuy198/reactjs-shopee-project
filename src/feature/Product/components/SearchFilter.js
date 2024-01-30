import { useEffect, useState } from "react";

export default function SearchFilter({
  categories,
  handleCheckbox,
  handleDeselectAll,
  handleSubmit,
  minPriceRef,
  maxPriceRef,
}) {
  const [showAll, setShowAll] = useState(false);

  const itemCount = 3;
  const categoriesDisplayList = showAll
    ? categories
    : categories.slice(0, itemCount);
  const handleShowAll = () => {
    setShowAll(true);
  };

  return (
    <>
      <div className="flex w-[180px] flex-col gap-4 text-left">
        <div className="font-semibold uppercase">bộ lọc tìm kiếm</div>
        <div className="text-sm capitalize">
          <p className="py-3 text-base capitalize">theo danh mục</p>
          {categoriesDisplayList.map((category) => (
            <div className="mb-4 flex items-center" key={category.id}>
              <input
                id={`category-${category.id}`}
                type="checkbox"
                value={category.id}
                // checked={selectedCheckbox.includes(category.id)}
                onChange={handleCheckbox}
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 accent-primary outline-none"
              />
              <label
                htmlFor={`category-${category.id}`}
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {category.categoryName}
              </label>
            </div>
          ))}
          {!showAll && (
            <p
              className="cursor-pointer pl-6"
              onClick={handleShowAll}
              id="showAllButton"
            >
              Thêm
            </p>
          )}
        </div>
        <div className="h-[0.5px] w-full bg-black/10"></div>
        <div className="flex flex-col gap-3 text-sm capitalize">
          <p className="text-base capitalize">khoảng giá</p>
          <div className="flex w-full items-center">
            <div className="w-5/12 text-left">
              <input
                type="text"
                id="minPrice"
                name="minPrice"
                ref={minPriceRef}
                data-input-counter
                aria-describedby="helper-text-explanation"
                className="w-full border border-gray-300 py-1 text-center text-sm focus:outline-none"
                placeholder="999"
              />
            </div>
            <div className=" flex w-2/12 items-center justify-center">
              <div className="h-[1px] w-1/2 border border-[#bdbdbd]"></div>
            </div>
            <div className="w-5/12 text-right">
              <input
                type="text"
                id="maxPrice"
                name="maxPrice"
                ref={maxPriceRef}
                data-input-counter
                aria-describedby="helper-text-explanation"
                className="w-full border border-gray-300 py-1 text-center text-sm focus:outline-none"
                placeholder="999"
              />
            </div>
          </div>
          <button
            onClick={handleSubmit}
            className="w-full appearance-none rounded-sm bg-primary py-2 font-semibold uppercase text-white"
          >
            áp dụng
          </button>
        </div>
        <div className="h-[0.5px] w-full bg-black/10"></div>
        <div>
          <div className="py-3">
            <button
              onClick={handleDeselectAll}
              className="w-full appearance-none rounded-sm bg-primary py-2 font-semibold uppercase text-white"
            >
              xoá tất cả
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
