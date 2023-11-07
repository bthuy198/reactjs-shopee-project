import InitAllData from "./features/baseData/InitAllData";
import Utils from "./utils/Utils";
import Home from "./features/componets/Content/Home/Home";

export default function App() {
  return (
    <>
      <InitAllData />
      <Utils />
      <Home />
    </>
  );
}