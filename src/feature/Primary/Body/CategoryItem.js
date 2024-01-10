import HeaderSection from "./HeaderSection";

export default function CategoryItem({ image, title }) {
  return (
    <>
      <div className="grid grid-rows-3 text-sm hover:shadow">
        <div className="row-span-2 mt-[10%] flex items-center justify-center">
          <img
            className="h-[70%] w-[70%] object-cover"
            src={require(`assets/images/category/${image}`)}
          ></img>
        </div>
        <div className="flex items-start justify-center">{title}</div>
      </div>
    </>
  );
}
