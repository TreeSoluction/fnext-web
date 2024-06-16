import Header from "@/components/Header";
import Image from "next/image";

export default function Franchises() {
  return (
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
      <div className="flex flex-col justify-center items-center pt-40 text-center bg-gray-50">
        <div className="shadow-md businessRegisterSection">
          <div className="text-xl text-start">Informacoes da Franquia</div>
          <div className="text-sm text-start">Nome da Franquia</div>
          <input></input>
          <div className="text-sm text-start">Descreva Franquia</div>
          <input></input>
          <div className="text-sm text-start">Descricao da Franquia</div>
          <input></input>
        </div>
        <div className="shadow-md businessRegisterSection">
          <div className="text-xl text-start">Segmento de Atuacao</div>
          <select name="" id="">
            <option value="">Volvo</option>
            <option value="">Saab</option>
            <option value="">Opel</option>
            <option value="">Audi</option>
          </select>
        </div>
        <div className="shadow-md businessRegisterSection">
          <div className="text-xl text-start">Logo</div>
          <input type="file"></input>
        </div>
        <div className="shadow-md businessRegisterSection">
          <div className="text-xl text-start">Imagens</div>
          <input type="file" multiple></input>
        </div>
        <div className="shadow-md businessRegisterSection">
          <div className="text-xl text-start">Videos</div>
          <div className="text-sm text-start">URL de videos sobre sua franquia (opcional)</div>
          <input></input>
          <div className="text-sm text-start">URL do site da sua franquia</div>
          <input></input>
        </div>
        <div className="shadow-md businessRegisterSection">
          <div className="text-xl text-start">Informacoes Financeiras</div>
          <div className="flex flex-col">
            <div className="flex flex-col 2xl:flex-row justify-between">
              <div>
                <div className="text-sm text-start">Faturamento medio mensal</div>
                <input className="w-100"></input>
              </div>
              <div>
                <div className="text-sm text-start">Unidades no Brasil</div>
                <input></input>
              </div>
              <div>
                <div className="text-sm text-start">Sede</div>
                <input></input>
              </div>
            </div>
            <div className="flex">
              <div>
                <div className="text-sm text-start">Retorno de investimento</div>
                <div>
                  <input></input>
                  <input placeholder="Ate"></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-md businessRegisterSection">
          <div className="text-xl text-start">Modelos de Negocio</div>
          <div className="text-sm text-start">Por favor, selecione as categorias de atuacao da sua franquia e forneca as informacoes financeiras pertinentes a cada uma delas</div>
          <button>Adicionar Modelo</button>
        </div>
      </div>
    </div>
  );
}
