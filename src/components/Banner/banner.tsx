import { ICONS } from "@/constants/icons";

export default function Banner() {
  return (
    <>
      <div>
        <div className="flex w-full">
          <img src={ICONS.banner} alt="" />
          <h1 className="absolute lg:top-40 md:top-48 top-48 left-1/4 transform -translate-x-1/2 -translate-y-1/2 lg:text-4xl md:text-2xl text-xl text-sm font-bold text-white ">Consultoria. <br />
              Franquias.
          </h1>
        </div>
      </div>
    </>
  );
}
