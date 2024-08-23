"use client";

import Header from "@/components/Header";
import { ICONS } from "@/constants/icons";

export default function Home() {
  return (
    <>
      <div>
        <Header>
          <a className="flex gap-2 items-center font-bold text-white " href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-left-fill"
              viewBox="0 0 16 16"
            >
              <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
            </svg>
            <p>Voltar</p>
          </a>
        </Header>
      </div>

      <div className="flex w-full pt-4 min-h-screen items-center justify-center">
        <div className="flex flex-col w-full max-w-md p-6 sm:px-12 sm:py-10 bg-white rounded-[5px] sm:rounded-[10px]  shadow-xl">
          <div className="flex flex-col flex-shrink-0 items-center justify-center mx-4 relative pt- pb-6">
            <img
              height={130}
              width={130}
              src={ICONS.models.set_up}
              alt="Set Up"
            />
          </div>
          <div className=""></div>
          <div className="flex flex-col text-center">
            <h2 className="flex flex-col -ml-6 -mr-8 pt-4 pb-4 text-xl font-bold">
              Agradecemos por finalizar seu cadastro. <br /> Em pouco tempo, sua
              página estará pronta <br /> para captar franqueados com fenext !
            </h2>
            <p className="pt-2 pb-16">
              Fique tranquilo, te avisaremos quando estiver tudo pronto.
            </p>
          </div>

          <div className=" flex flex-col w-full items-center justify-center  gap-2">
            <button
              className="mx-auto  w-80 min-w-40 bg-LOW_BLUE hover:bg-blue-900 text-white text-xl py-2 rounded-[5px]"
              type="submit"
            >
              Finalizar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
