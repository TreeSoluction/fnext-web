"use client"

import { useState } from 'react';
import Link from 'next/link';
import { ICONS } from '@/constants/icons'

export default function LinksNavegation ()  {
  const [showAlimentacao, setShowAlimentacao] = useState(false);   //  Estado que controla se o link para "Alimentação" está visível.
  const [showMaisMu, setShowMaisMu] = useState(false);            //  Estado que controla se o link para "Mais Mu" está visível.

  return (
    
    <div>
      

        <div className="flex space-x-2 items-center  w-full pl-4 pt-8">
          <img  src={ICONS.overviewImages.home} alt="Menu" width={20} height={20} />
      <Link href="#" onClick={() => setShowAlimentacao(true)}>
        <div className="group relative flex items-center space-x-2">
          <span className="group-hover:bg-transparent after:content-[''] after:absolute after:left-1/2 after:top-full after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 group-hover:after:left-0 group-hover:after:w-full">
            Home </span>
          <img src={ICONS.overviewImages.arrow} alt="" />
        </div>
      </Link>

    {/* showAlimentacao: Se for verdadeiro, renderiza o link para a página "Alimentação". Ao clicar nesse link, o estado showMaisMu é atualizado para true. */}
      {showAlimentacao && (
        <Link href="/alimentacao" onClick={() => setShowMaisMu(true)}>
            <div className="group relative flex items-center space-x-2">
            <span className="group-hover:bg-transparent after:content-[''] after:absolute after:left-1/2 after:top-full after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 group-hover:after:left-0 group-hover:after:w-full">
             Alimentação</span>            
            <img src={ICONS.overviewImages.arrow} alt="" />
            </div>
        </Link>
      )}
    {/* showMaisMu: Se for verdadeiro, renderiza o link para a página "Mais Mu". */}
      {showMaisMu && (
        <Link href="/mais">Mais Mu </Link>
      )}
    </div>

  


    </div>
  );
};
