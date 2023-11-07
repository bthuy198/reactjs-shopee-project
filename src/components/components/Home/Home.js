import { useSelector } from "react-redux";

export default function Home() {
  const baseData = useSelector((state) => state.baseData.data);
  const webs = baseData.webs;
  return (
    <>
    </>
  );
}
