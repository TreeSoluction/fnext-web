import { AuthContext } from "@/contexts/auth.context";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export default function Header({ user, owner }) {
  const { logOut } = useContext(AuthContext);
  const router = useRouter();
  return (
    <header className="bg-blue-800 p-10 px-28 flex justify-end items-center">
      <div className="flex justify-center gap-2 items-center font-bold text-white">
        <div className="hover:bg-white p-2 px-6 rounded-full hover:text-blue-800">
          Inicio
        </div>
        {user ? (
          <>
            <div className="hover:bg-white p-2 px-6 rounded-full hover:text-blue-800">
              Favoritos
            </div>
            <div className="hover:bg-white p-2 px-6 rounded-full hover:text-blue-800">
              Notificacoes
            </div>
            {owner ? (
              <>
                <div className="hover:bg-white p-2 px-6 rounded-full hover:text-blue-800 ">
                  <button
                    onClick={() => router.push("/account/edit")}
                    className="underline"
                  >
                    Meu perfil
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="hover:bg-white p-2 px-6 rounded-full hover:text-blue-800 ">
                  <button
                    onClick={() => router.push("/investor/register")}
                    className="underline"
                  >
                    Quero Investir
                  </button>
                </div>
              </>
            )}

            <div className="bg-white p-2 px-6 rounded-full text-blue-800">
              <button onClick={() => router.push("/registerFranchises")}>
                Criar Franquia
              </button>
            </div>
            <div className="hover:bg-white p-2 px-6 rounded-full hover:text-blue-800">
              <button onClick={() => logOut()}>Sair</button>
            </div>
          </>
        ) : (
          <>
            <button onClick={() => router.push("/login")}>Entrar-se</button>
            <div className="bg-white p-2 px-6 rounded-full text-blue-800">
              <button onClick={() => router.push("/register")}>
                Registrar-se
              </button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}
