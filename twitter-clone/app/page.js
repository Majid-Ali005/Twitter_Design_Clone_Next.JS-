import Image from "next/image";
import LeftSide from "./components/LeftSide";
import RightSide from "./rightSide/RightSide";

export default function Home() {
  return (
    <div >
     <LeftSide />
     <RightSide />
    </div>
  );
}
