export default function ItemNavBar({ children }) {
  return (
    <>
      <div className="flex cursor-pointer items-center justify-center text-sm hover:text-orange-100">
        {children}
      </div>
    </>
  );
}
