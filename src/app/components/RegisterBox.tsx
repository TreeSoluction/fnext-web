export default function RegisterBox() {
  return (
    <div className="container xl:w-3/12 bg-HIGH_BLUE shadow-md  mt-24 rounded-lg">
      <div className="flex-col">
        <div className="text-3xl text-center text-white font-thin items-center mt-5">REGISTRO</div>
        <form className="flex-col p-10 items-center">
          <label className="text-white font-semibold ">Nome Completo</label>
          <input className="rounded-sm w-full bg-transparent border-2 border-white text-white focus:outline-none transition duration-150" type="text" />
          <label className="text-white font-semibold ">Email</label>
          <input className="rounded-sm w-full bg-transparent border-2 border-white text-white focus:outline-none transition duration-150" type="text" />
          <label className="text-white font-semibold ">Senha</label>
          <input className="rounded-sm w-full bg-transparent border-2 border-white text-white focus:outline-none transition duration-150" type="text" />
          <label className="text-white font-semibold ">Confirmar Senha</label>
          <input className="rounded-sm w-full bg-transparent border-2 border-white text-white focus:outline-none transition duration-150" type="text" />
          <button className="rounded-sm w-full font-semibold mt-3 bg-transparent border-2 border-blue-600 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none focus:ring-2 ring-white transition duration-150 text-white px-4 py-2">Cadastrar</button>
        </form>
      </div>
    </div >
  );
}
