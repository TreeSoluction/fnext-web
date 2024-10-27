"use client";

import Banner from "@/components/Banner/Banner";
import Carousel from "@/components/Carousel/Carousel";
import HeaderHome from "@/components/HeaderHome";
import { AuthContext } from "@/contexts/auth.context";
import { ListFranchise } from "@/services/Franchises/list.franchise";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const [franchise, setFranchises] = useState<IFranchiseList[]>([]);
  const { logOut, owner, user } = useContext(AuthContext);

  const router = useRouter();
  useEffect(() => {
    const load = async () => {
      const result = await ListFranchise();
      setFranchises(result);
    };

    load();
  }, []);

  return (
    <div className=" bg-[#F7F7F7]">
      <HeaderHome>
        <div className="flex flex-wrap-reverse justify-center items-center gap-4">
          {user ? (
            <>
              {owner ? (
                <></>
              ) : (
                <>
                  <a className="text-sm text-white font-bold capitalize text-center border rounded-full p-4">
                    <button onClick={() => router.push("/investor/register")}>
                      Criar conta de franquia
                    </button>
                  </a>
                </>
              )}
              <a className="text-sm text-blue-900 font-bold capitalize text-center bg-white rounded-full p-4">
                <button onClick={() => router.push("/registerFranchises")}>
                  Cadastre Sua Franquia
                </button>
              </a>
            </>
          ) : (
            <>
              <a className="text-sm text-white font-bold capitalize text-center border rounded-full p-4 px-7">
                <button onClick={() => router.push("/login")}>Entrar</button>
              </a>
              <a className="text-sm text-blue-900 font-bold capitalize text-center bg-white rounded-full p-4">
                <button onClick={() => router.push("/register")}>
                  Cadastre Sua Franquia
                </button>
              </a>
            </>
          )}
          {/* <MenuBar /> */}
        </div>
      </HeaderHome>
      <Banner />
      <div className="flex justify-center p-5 mt-28">
        <div className="flex flex-row flex-wrap gap-8 justify-center">
          {franchise.map((franchise) => (
            <Carousel
              key={franchise.id}
              id={franchise.id}
              name={franchise.name}
              sector={franchise.sector}
              minValue={franchise.ROI_min}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
