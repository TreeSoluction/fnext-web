"use client";

import FranchiseDetails from "@/components/FranchiseDetails/FranchiseDetails";
import FranchiseInfoCard from "@/components/FranchiseInfoCard/FranchiseInfoCard";
import FranchiseOverview from "@/components/FranchiseOverview/FranchiseOverview";
import MediaCarousel from "@/components/MediaCarousel/MediaCarousel";
import { ICONS } from "@/constants/icons";
import { GetById } from "@/services/Franchises/get.franchise";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [activeComponent, setActiveComponent] = useState("resume"); // Componente ativo inicial
  const [franchise, setFranchise] = useState<IFranchise>();

  useEffect(() => {
    const fetchFranchise = async () => {
      try {
        const data = await GetById(params.id);
        console.log(data);
        setFranchise(data);
        console.log(franchise);
      } catch (error) {
        console.error("Error fetching franchise:", error);
      }
    };

    fetchFranchise();
    console.log(franchise);
  }, [params.id]);

  useEffect(() => {
    console.log(franchise);
  }, [franchise]);

  const handleFirstBtnClick = () => {
    setActiveComponent("resume");
  };

  const handleSecondBtnClick = () => {
    setActiveComponent("physicalStore");
  };

  return (
    <div>
      <div className="lg:w-1/2 md:w-full w-full pl-8 pt-10 ">
        <div>
          <div className="flex py-8">
            <img src={ICONS.overviewImages.profile} alt="" />
            <h1 className="flex items-center justify-center pl-4 font-bold text-5xl">
              {franchise?.name}
            </h1>
          </div>
        </div>

        <div className="w-full sm:pb-4 md:pb-6 lg:pb-8 sm:pr-8 lg:pr-0">
          <p className="text-justify leading-relaxed text-gray-800 sm:text-base md:text-lg lg:text-xl break-words">
            {franchise?.description}
          </p>
        </div>
      </div>

      <div className="p-10">
        <img src={franchise?.logo} width={250} height={250}></img>
      </div>

      <div className="flex lg:flex-row md:flex-col sm:flex-col w-full pt-10 px-10 gap-16">
        {franchise?.images == null ? (
          <MediaCarousel images={franchise?.images} />
        ) : (
          <></>
        )}

        {franchise == null ? (
          <></>
        ) : (
          <>
            <FranchiseInfoCard franchise={franchise as IFranchise} />
          </>
        )}
      </div>

      <div className="">
        <div className="lg:w-1/2 md:w-full w-full pl-8">
          <div>
            <div className="flex pb-8 pl-4 gap-8">
              <div className="sm:w-20 w-32 flex-shrink-0 flex flex-col items-center justify-center group hover:cursor-pointer hover:bg-slate-100 transition-all duration-300 transition ease-in-out delay-50 hover:-translate-y-0.2 hover:scale-110">
                <button
                  className={`flex text-[22px] items-center justify-center gap-2 font-bold rounded-t-md px-2 border-b-6 bg-white transition-transform duration-200 ease-in-out hover:scale-105 ${activeComponent === "resume" ? "border-b-4 border-blue-800 transform scale-105" : ""}`}
                  onClick={handleFirstBtnClick}
                >
                  Resumo
                </button>
              </div>

              <div className="sm:w-32 w-32 flex-shrink-0 flex flex-col items-center justify-center group hover:cursor-pointer hover:bg-slate-100 transition-all duration-300 transition ease-in-out delay-50 hover:-translate-y-0.2 hover:scale-110">
                <button
                  className={`flex text-[22px] items-center justify-center gap-2 font-bold rounded-t-md px-2 border-b-6 bg-white transition-transform duration-200 ease-in-out hover:scale-105 ${activeComponent === "physicalStore" ? "border-b-4 border-blue-800 transform scale-105" : ""}`}
                  onClick={handleSecondBtnClick}
                >
                  Loja Física
                </button>
              </div>
            </div>
          </div>
          {activeComponent === "resume" && <FranchiseOverview />}{" "}
        </div>

        <div className="w-full">
          {activeComponent === "physicalStore" && (
            <FranchiseDetails franchise={franchise as IFranchise} />
          )}{" "}
        </div>
      </div>
    </div>
  );
}
