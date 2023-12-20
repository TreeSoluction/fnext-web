export default function Home() {
  return (
    <div className="xl:flex">
      <div className="flex w-full xl:h-screen bg-HIGH_BLUE items-center justify-center">
        <div className="xl:text-9xl text-7xl text-white font-bold">FENEXT</div>
      </div>
      <div className="flex-col h-screen bg-LOW_BLUE xl:p-14 pl-14 pr-14 pt-10">
        <div className="md:text-6xl xl:text-7xl text-4xl xl:mt-20 xl:mr-24 xl:ml-24 text-white font-semibold">
          Crie o seu cadastro gratuito em poucos passos...
        </div>
        <div className="mt-16">
          <form className="xl:ml-24 xl:mr-24">
            <label className="text-white">Nome Completo</label>
            <input className="block w-full transition duration-200 rounded-sm bg-transparent border-2 border-white text-white" />
            <label className="text-white">Email</label>
            <input className="block w-full transition duration-200 rounded-sm bg-transparent border-2 border-white text-white" />
            <label className="text-white">Senha</label>
            <input className="block w-full transition duration-200 rounded-sm bg-transparent border-2 border-white text-white" />
            <button className="text-white transition duration-200 outline-none focus:outline hover:outline hover:outline-5 focus:outline-5 focus:outline-blue-600 hover:outline-blue-600 ring-1 hover:bg-white hover:text-black bg-transparent border-2 border-white mt-6 h-10 w-full rounded-sm font-semibold">Registrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}
