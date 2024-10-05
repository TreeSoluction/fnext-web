"use client"

import React from "react"
import { ICONS } from "@/constants/icons"



export default function FranchiseOverview () {
    return (
        <div className="sm:pr-8 lg:pr-0">

                <div>
                    <div>
                        <h1 className="font-bold text-2xl pb-4">Resumo da Franquia</h1>
                    </div>
                    <img src={ICONS.overviewImages.image01} alt="" />
                    
                </div>

                <div className="pt-4">
                    <p>
                        Nosso conceito é cheio de siglas, estamos cientes. Mas traduzi-los a cada
                        um de vocês também faz parte do nosso compromisso ético e profissional.
                        Quando dizemos que a Ecotrace integra o agronegócio, não estamos
                        falando da boca para fora. Quando afirmamos que <span className="font-bold">somos capazes de
                        monitorar toda cadeia de valor,</span> também não.
                    </p>
                </div>

                <div className="py-4">
                    <img src={ICONS.overviewImages.image02} alt="" />
                </div>        

                <div>
                    <p className="pb-4">
                        Sendo assim, gostaríamos de compartilhar que nós usamos a chamada
                        arquitetura API. Em outras palavras, ela é capaz de integrar diversos
                        sistemas por meio de microsserviços, que promovem conexão fluida entre
                        todos os envolvidos no processo produtivo. Então, ao lado da robusta
                        tecnologia blockchain, que securitiza e autentica as informações, criamos
                        um ambiente totalmente auditável e transparente.
                    </p>

                    <p className="pb-4">
                        E, acredite. é um ganho e tanto, principalmente quando levamos em conta
                        que tudo isso é feito em cada fase do ciclo produtivo. Esta integridade de
                        dados é fundamental para enfrentar os desafios de transparência nas
                        cadeias das commodities, prevenindo riscos de práticas não sustentáveis
                        e ilícitas que podem afetar a reputação de empresas aqui e no exterior.
                    </p>

                    <p className="pb-4">
                        Nossa solução, comprometida com os valores do ESG (Governança
                        Socioambiental, na sigla em inglês), viabiliza uma cadeia de suprimentos
                        ética e sustentável. Com isso, cremos que enfrentamos problemais reais
                        do dia a dia, como manejo indevido de determinadas áreas de terra,
                        desmatamento ilegal, trabalho análogo à escravidão, entre outros. Desta
                        forma, damos voz à responsabilidade social e ambiental no setor, sendo
                        <span className="font-bold">decisivos para o desenvolvimento de um agronegócio forte e sustentável.</span>
                    </p>
                </div>

                <div className="pt-4 pb-8">
                    <img src={ICONS.overviewImages.image03} alt="" />
                </div>

                <div >
                    <h1 className="font-bold pt-4 pb-2 text-3xl">Destaques</h1>  
                        <span className="font-bold ">Crescimento</span>
                        <p className="pb-4">
                            A Ecotrace apresentou um crescimento de 14% em seu faturamento anual
                            entre 2022 e 2023 - passando de R$ 6.1MM para R$ 7MM. Entre 2021 e 2022 a
                            Startup apresentou um crescimento de 204%, tendo um faturamento anual
                            de R$ 2MM em 2021.
                        </p>

                        <p className="pb-4">
                            Em 2023, focou na estratégia de crescimento da receita recorrente,
                            apresentando um aumento de 80% no seu MRR, evoluindo de R$ 346k em
                            Dez/22 para R$ 614k em Dez/23. Fechou o ano de 2023 com uma margem
                            bruta de 67% e margem EBITDA de 13%. A startup projeta fechar 2024 com
                            uma margem bruta de 74%, margem EBITDA de 17% e margem líquida de
                            6%.
                        </p>
                        
                        <span className="font-bold">Modelo de Negócios & Mercado</span>
                        <p className="pb-4">
                            O modelo da Ecotrace foca na rastreabilidade da cadeia produtiva,
                            promovendo transparência em todos os elos e auxiliando empresas a se
                            adequarem às exigências ESG. Além de contribuir para uma cadeia limpa,
                            leva confiança e segurança do produtor ao consumidor final à medida
                            que fornece dados de monitoramento de todos os processos, por meio do
                            uso de tecnologias como o blockchain, a IA e IoT.
                        </p>

                        <p className="pb-4">
                            O mercado de rastreabilidade no Brasil é crescente e estimado em R$ 7
                            bilhões. A Ecotrace atua dentro dos segmentos bovino, couro, aves e
                            algodão, atendendo a 5 ODS da ONU - já tendo rastreado mais de 6
                            milhões de toneladas.
                        </p>

                        <span className="font-bold">Time</span>
                        <p className="pb-4">
                            A Startup conta com um time de excelente track record e com um board
                            de advisors experiente para expandir o negócio. Flávio Redi (CEO e Co-
                            Founder) possui vasta experiência no agronegócio – sendo já tendo um
                            Exit de outra empresa do qual foi Co-Founder antes de iniciar a jornada da
                            Ecotrace. Além disso, a composição dos C-Levels demonstra uma
                            complementaridade importante de expertises para uma startup em um
                            estágio mais avançado, passando pelo setor de inovação, de tecnologia,
                            da indústria, de finanças e de gestão.

                        </p>
                </div>
        </div>
    )
}