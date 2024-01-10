import Sections from "./Sections";
import Info from "./Info";
export default function Footer() {
  return (
    <>
      <div className="bg-[#fbfbfb]">
        <div className="mx-auto max-w-[1200px]">
          <Sections />
        </div>
      </div>
      <div className="bg-[#f5f5f5]">
        <div className="mx-auto max-w-[1200px]">
          <Info />
        </div>
      </div>
    </>
  );
}
