export default function ListItem({ children }) {
  return (
    <>
      <ul className="list-none px-0 pb-4 pt-0 text-[13px] leading-7">
        {children}
      </ul>
    </>
  );
}
