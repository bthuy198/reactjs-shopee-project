export default function CategoryItem({ handleCheckbox, category }) {
  return (
    <>
      {/* <div className="mb-4 flex items-center">
        <input
          id={`category-${category.id}`}
          type="checkbox"
          value={category.id}
          onChange={handleCheckbox}
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 accent-primary outline-none"
        />
        <label
          htmlFor={`category-${category.id}`}
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {category.categoryName}
        </label>
      </div> */}
    </>
  );
}
