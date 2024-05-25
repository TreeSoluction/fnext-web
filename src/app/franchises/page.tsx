import Header from "@/components/Header";
import Image from "next/image";

export default function Franchises() {
  return (
    <div>
      <Header>
        <a className="flex gap-2 items-center font-bold text-white " href="/">
          
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-left-fill" viewBox="0 0 16 16">
            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
          </svg>
          <p>Voltar</p>
        </a>
      </Header>
      <div className="flex flex-col justify-center items-center pt-40 text-center">
        <Image
          width={300}
          height={300}
          src="/img/generic-person.jpg"
          alt="Generic person image"
        />
        <h1 className="text-3xl font-semibold">
          Pronto para começar ?
        </h1>
        <p className="text-xs m-2 max-w-96">
          Solicitaremos algumas informações essenciais para criar a página da sua franquia. Dessa forma, preencha todos os campos para passar maior credibilidade para o franqueado
        </p>
        <a href="/franchises/register" className="bg-MAIN_HIGH_BLUE my-5 p-2 px-16 rounded-full text-white line-clamp-4">
          Começar
        </a>
        <span className="bg-MAIN_HIGH_BLUE block h-4 w-full mt-40"></span>
      </div>
    </div>
  );
};