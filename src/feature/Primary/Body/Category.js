import CategoryItem from "feature/Primary/Body/CategoryItem";
import HeaderSection from "./HeaderSection";

export default function Category({ categories }) {
  return (
    <>
      <HeaderSection className="w-full" title={"danh mục"} />
      <div className="grid w-full grid-cols-10">
        {categories.map((item) => (
          <CategoryItem
            image={"category1.png"}
            title={item.categoryName}
            key={item.id}
          />
        ))}
      </div>
    </>
  );
}
