export default function CategoryItem() {
  return (
    <>
      <div class="mb-4 flex items-center">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="h-4 w-4 rounded border-gray-300 bg-gray-100 accent-primary outline-none"
        />
        <label
          for="default-checkbox"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Default checkbox
        </label>
      </div>
    </>
  );
}
