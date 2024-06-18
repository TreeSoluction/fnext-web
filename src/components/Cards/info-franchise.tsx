import Image from "next/image";

export default function InfoFranchiseCard() {
  return (
    <div className="p-5 sm:p-8 bg-MAIN_HIGH_BLUE w-11/12 max-w-[750px] rounded-[3rem]">
      <div className="flex flex-wrap gap-10 justify-center md:justify-normal">
        <div>
          <Image
            width={360}
            height={360}
            src="/img/info-franchise.png"
            alt="info-franchise"
          />
        </div>
        <div className="max-w-64 text-white leading-6">
          <h3 className="font-bold text-3xl my-2">Bicotinfo</h3>
          <p className="text-xs">
            Mpresa empresa abre mais 29 franquias unidades no sul do brasil
            trazendo mais de 20mil de rentabilidade mensai8s para trazendo mais
            de 20mil de rentabilidade mensai8s para para trazendo para trazendo
            mais de 20mil de rentabilidade mensai8s para a para trazendo mais de
            20mil de rentabilidade mensai8s para
          </p>
          <div className="flex gap-4 mt-6 font-bold text-xs">
            <div className="flex flex-col items-center">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#0D2048"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#00000"
                    stroke-width="2"
                  />{" "}
                  <path
                    d="M15 9.94728C14.5 9.3 13.8 8.5 12 8.5C10.2 8.5 9 9.51393 9 9.94728C9 10.3806 9.06786 10.9277 10 11.5C10.7522 11.9618 12.6684 12.0439 13.5 12.5C14.679 13.1467 14.8497 13.8202 14.8497 14.0522C14.8497 14.6837 13.4175 15.4852 12 15.5C10.536 15.5153 9.5 14.7 9 14.0522"
                    stroke="#00000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                  <path
                    d="M12 7V17"
                    stroke="#00000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />{" "}
                </g>
              </svg>
              <span>Financeiro</span>
            </div>
            <div className="flex flex-col items-center">
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="white"
                strokeWidth="0.00024000000000000003"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M21.4498 10.275L11.9998 3.1875L2.5498 10.275L2.9998 11.625H3.7498V20.25H20.2498V11.625H20.9998L21.4498 10.275ZM5.2498 18.75V10.125L11.9998 5.0625L18.7498 10.125V18.75H14.9999V14.3333L14.2499 13.5833H9.74988L8.99988 14.3333V18.75H5.2498ZM10.4999 18.75H13.4999V15.0833H10.4999V18.75Z"
                    fill="white"
                  />
                </g>
              </svg>
              <span>Home Based</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-end justify-between pt-10 px-10 gap-8">
        <p className="w-min text-sm text-end leading-5 font-semibold text-slate-300">
          <span className="block whitespace-nowrap">
            Investimento Total (R$)
          </span>
          <span className="block whitespace-nowrap">R$12.000 a 200.000</span>
        </p>
        <a
          className="bg-white px-6 py-2 rounded-full text-xs font-semibold"
          href="#"
        >
          Saber mais
        </a>
      </div>
    </div>
  );
}
