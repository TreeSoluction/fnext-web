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
    setActiveComponent("resume"); // Mostra o conteúdo do componente FranchiseOverview
  };

  const handleSecondBtnClick = () => {
    setActiveComponent("physicalStore"); // Mostra o conteúdo do componente FranchiseDetails
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

      <div className="flex lg:flex-row md:flex-col sm:flex-col w-full pt-10 px-10 gap-16">
        <MediaCarousel />

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

      {/*<div>*/}
      {/*  {activeComponent === "resume" && <CommentsBox />}{" "}*/}
      {/*  /!* Mostra o conteúdo do componente CommentsBox apenas se FranchiseOverview estiver ativo *!/*/}
      {/*</div>*/}

      {/*/!* Componente de avaliações sem comentários *!/*/}
      {/*<div>*/}
      {/*  <NoneComments />*/}
      {/*</div>*/}

      {/*/!* Segunda Página *!/*/}
      {/*<div className="bg-black w-full h-full p-20">*/}
      {/*  <div className="text-white">*/}
      {/*    <h1 className="text-5xl font-bold pb-4">*/}
      {/*      Veja também outras opções de investimentos*/}
      {/*    </h1>*/}
      {/*    <p className="pb-4">*/}
      {/*      Selecionamos outras franquia com alto potencial de retorno com base*/}
      {/*      no seu segmento de interesse.*/}
      {/*    </p>*/}
      {/*  </div>*/}

      {/*  <div className="flex flex-shrink-1 lg:flex-row md:flex-col sm:flex-col w-full h-full gap-4 pb-6">*/}
      {/*    <div className="bg-white lg:w-1/3 md:w-full sm:w-full h-full p-4 rounded-md">*/}
      {/*      <div className="flex justify-end">*/}
      {/*        <button className="text-white p-2 bg-blue-800 rounded-md transition-transform duration-200 ease-in-out hover:scale-105 ">*/}
      {/*          Indicado*/}
      {/*        </button>*/}
      {/*      </div>*/}

      {/*      <div className="flex flex-row">*/}
      {/*        <div className="flex flex-row px-2">*/}
      {/*          <img src={ICONS.overviewImages.logo_contbank} alt="" />*/}
      {/*        </div>*/}
      {/*        <div className="w-2/3 pb-8">*/}
      {/*          <h6 className="font-bold">Contbank</h6>*/}
      {/*          <p className="w-full">*/}
      {/*            "O Contbank utiliza contadores e IA para revolucionar o acesso*/}
      {/*            à crédito para micro, pequenas e médias empresas. A fintech é*/}
      {/*            um banco digital que oferece uma experiência única para MPEs,*/}
      {/*            oferecendo crédito a..."*/}
      {/*          </p>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      <div className="text-sm bg-slate-200 w-24 px-2 rounded-md">*/}
      {/*        Alimentação*/}
      {/*      </div>*/}

      {/*      <div className="flex items-center justify-end pt-8 pr-6">*/}
      {/*        <Link href={"#"}>*/}
      {/*          <button className="flex items-center justify-center bg-blue-800 font-bold text-white w-full px-16 py-2 rounded-md transition-transform duration-200 ease-in-out hover:w-full hover:scale-105 ">*/}
      {/*            Ver Franquia*/}
      {/*          </button>*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*    </div>*/}

      {/*    <div className="bg-white lg:w-1/3 md:w-full sm:w-full h-full p-4 rounded-md">*/}
      {/*      <div className="flex justify-end">*/}
      {/*        <button className="text-white p-2 bg-blue-800 rounded-md transition-transform duration-200 ease-in-out hover:scale-105 ">*/}
      {/*          Indicado*/}
      {/*        </button>*/}
      {/*      </div>*/}

      {/*      <div className="flex flex-row">*/}
      {/*        <div className="flex flex-row px-2">*/}
      {/*          <img src={ICONS.overviewImages.logo_contbank} alt="" />*/}
      {/*        </div>*/}
      {/*        <div className="w-2/3 pb-8">*/}
      {/*          <h6 className="font-bold">Contbank</h6>*/}
      {/*          <p className="w-full ">*/}
      {/*            "O Contbank utiliza contadores e IA para revolucionar o acesso*/}
      {/*            à crédito para micro, pequenas e médias empresas. A fintech é*/}
      {/*            um banco digital que oferece uma experiência única para MPEs,*/}
      {/*            oferecendo crédito a..."*/}
      {/*          </p>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      <div className="text-sm bg-slate-200 w-24  px-2 rounded-md">*/}
      {/*        Alimentação*/}
      {/*      </div>*/}

      {/*      <div className="flex items-center justify-end pt-8 pr-6">*/}
      {/*        <Link href={"#"}>*/}
      {/*          <button className="flex items-center justify-center bg-blue-800 font-bold text-white w-full px-16 py-2 rounded-md transition-transform duration-200 ease-in-out hover:w-full hover:scale-105 ">*/}
      {/*            Ver Franquia*/}
      {/*          </button>*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*    </div>*/}

      {/*    <div className="bg-white lg:w-1/3 md:w-full sm:w-full h-full p-4 rounded-md">*/}
      {/*      <div className="flex justify-end">*/}
      {/*        <div className="text-white p-2 bg-blue-800 rounded-md">*/}
      {/*          Indicado*/}
      {/*        </div>*/}
      {/*      </div>*/}

      {/*      <div className="flex flex-row">*/}
      {/*        <div className="flex flex-row px-2">*/}
      {/*          <img src={ICONS.overviewImages.logo_contbank} alt="" />*/}
      {/*        </div>*/}
      {/*        <div className="w-2/3 pb-8">*/}
      {/*          <h6 className="font-bold">Contbank</h6>*/}
      {/*          <p className="w-full ">*/}
      {/*            "O Contbank utiliza contadores e IA para revolucionar o acesso*/}
      {/*            à crédito para micro, pequenas e médias empresas. A fintech é*/}
      {/*            um banco digital que oferece uma experiência única para MPEs,*/}
      {/*            oferecendo crédito a..."*/}
      {/*          </p>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      <div className="text-sm bg-slate-200 w-24  px-2 rounded-md">*/}
      {/*        Alimentação*/}
      {/*      </div>*/}

      {/*      <div className="flex items-center justify-end pt-8 pr-6">*/}
      {/*        <Link href={"#"}>*/}
      {/*          <button className="flex items-center justify-center bg-blue-800 font-bold text-white w-full px-16 py-2 rounded-md transition-transform duration-200 ease-in-out hover:w-full hover:scale-105 ">*/}
      {/*            Ver Franquia*/}
      {/*          </button>*/}
      {/*        </Link>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}

      {/*  /!*<div className="flex items-center justify-center w-ful pb-10">*!/*/}
      {/*  /!*  <Link href={"#"}>*!/*/}
      {/*  /!*    <button className="px-4 py-2 mt-4 sm:mt-0 sm:mb-6 sm:mr-6 flex items-center bg-white hover:bg-slate-100 text-sm sm:text-md text-blue-800 font-semibold border-2 border-blue-700 px-10 py-2 rounded-lg text-center transition-transform duration-200 ease-in-out hover:scale-105">*!/*/}
      {/*  /!*      Ver mais...*!/*/}
      {/*  /!*    </button>*!/*/}
      {/*  /!*  </Link>*!/*/}
      {/*  /!*</div>*!/*/}

      {/*  /!*<div className="bg-slate-700 border-[1px] p-6">*!/*/}
      {/*  /!*  <p className="pb-6 text-white">*!/*/}
      {/*  /!*    Nossa plataforma exerce a função de intermediadora entre*!/*/}
      {/*  /!*    franqueadores e potenciais franqueados, promovendo a facilitação do*!/*/}
      {/*  /!*    contato e da negociação entre as partes. Embora não assumamos*!/*/}
      {/*  /!*    responsabilidade por eventuais ocorrências decorrentes dessas*!/*/}
      {/*  /!*    negociações.*!/*/}
      {/*  /!*  </p>*!/*/}
      {/*  /!*  <p className="pb-4 text-white">*!/*/}
      {/*  /!*    Nos empenhamos em manter um ambiente seguro e confiável, por meio da*!/*/}
      {/*  /!*    aplicação de rigorosos critérios de análise e monitoramento. Nosso*!/*/}
      {/*  /!*    compromisso é assegurar que os usuários tenham acesso a informações*!/*/}
      {/*  /!*    claras e transparentes, promovendo relações comerciais seguras e*!/*/}
      {/*  /!*    sólidas.*!/*/}
      {/*  /!*  </p>*!/*/}
      {/*  /!*</div>*!/*/}

      {/*  /!*<div className="pt-10">*!/*/}
      {/*  /!*  <Footer />*!/*/}
      {/*  /!*</div>*!/*/}
      {/*</div>*/}
    </div>
  );
}
