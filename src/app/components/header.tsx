export default function Header() {
  return (
    <div>
      <div className="flex bg-HIGH_BLUE h-20 justify-between">
        <div className="text-7xl text-white font-thin ml-64">
          FENEXT
        </div>
        <div className="flex w-64 justify-evenly items-center mr-16">
          <div className="text-2xl text-white hover:text-LOW_PURPLE font-semibold">
            Guia
          </div>
          <div className="text-2xl text-white hover:text-LOW_PURPLE font-semibold">
            Registre-se
          </div>
        </div>
      </div>
      <div className="bg-LOW_PURPLE w-full h-1" />
    </div>
  )
}