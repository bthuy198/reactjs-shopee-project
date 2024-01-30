export default function CategoryItem({ image, title }) {
  return (
    <>
      <div className="grid grid-rows-3 text-sm hover:shadow">
        <div className="row-span-2 flex items-center justify-center pt-[10%]">
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
