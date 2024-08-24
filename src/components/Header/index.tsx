import { useRouter } from "next/navigation";

export default function Header({ user }) {
  const router = useRouter();
  console.log(user);
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
          </>
        ) : (
          <>
            <div className="bg-white p-2 px-6 rounded-full text-blue-800">
              <button onClick={() => router.push("/register")}>
                Registrar-se
              </button>
            </div>
            <button onClick={() => router.push("/login")}>Entrar-se</button>
          </>
        )}
      </div>
    </header>
  );
}
