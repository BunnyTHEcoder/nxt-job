import Image from "next/image";
import Navbar from "./components/Navbar";
import Sidebars from "./components/Sidebars";
import Filtertab from "./components/Filter";
import ColumnContainer from "./container/ColumnContainer";

export default function Home() {
  return (
    <div className="h-screen overflow-y-hidden">
      <Navbar />
      <div className="flex h-full">
        <Sidebars />
        <div className="w-full h-full px-5 overflow-x-hidden ">
          {/* Search & Create Jobs */}
          <Filtertab />
          {/* Contains Different DND Columns */}
          <ColumnContainer />
        </div>
      </div>
    </div>
  );
}
