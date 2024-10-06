"use client";

import { useRouter } from "next/navigation";

const Carousel = ({ id, name, sector, minValue }) => {
  const router = useRouter();

  function Visualize() {
    router.push(`/overview_page/${id}`);
  }

  return (
    <button
      onClick={Visualize}
      className="hover:scale-105 scale-100 transition-transform duration-2r00 ease-in-out"
    >
      <div className="flex flex-col items-center">
        <div className="flex w-80 h-60 bg-gray-200 justify-center items-center rounded-xl">
          Image HERE
        </div>
        <div className={"w-full"}>
          <div className="flex flex-col text-start p-2">
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="">{sector}</p>
            <p className="font-semibold">
              A partir de <span className="font-bold">R${minValue}</span>
            </p>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Carousel;
