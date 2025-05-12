import Image from "next/image";
import LeftSide from "./components/LeftSide";
import RightSide from "./rightSide/RightSide";
import HomePage from "./Home/HomePage";

export default function Home() {
  return (
    <div >
     <LeftSide />
     <HomePage />
     <RightSide />

    </div>
  );
}
