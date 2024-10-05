"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { ICONS } from "@/constants/icons";

// interface para definir a estrutura de um comentário
interface UserComment {
  name: string;
  rating: number;
  date: string;
  comment: string;
}

const comments: UserComment[] = [
  { name: "Juliano Rodrigues", rating: 5, date: "2024-08-17", comment: "Adquirir essa franquia foi uma das melhores decisões que já tomei! O suporte oferecido pela franqueadora foi excepcional desde o início, me guiando em cada etapa do processo. Além disso, o modelo de negócios é muito bem estruturado, o que me deu segurança para investir. Já estou vendo os resultados positivos no crescimento do meu negócio e me sinto confiante de que fiz a escolha certa. Recomendo para quem quer empreender com um respaldo sólido!" },
  { name: "Mariana Santos", rating: 5, date: "2024-08-18", comment: "Ótima experiência de compra! Atendimento excepcional e sempre pronto para ajudar." },
  { name: "Ana Oliveira", rating: 5, date: "2024-08-19", comment: "Produtos de alta qualidade e entrega rápida. Fiquei impressionado com a eficiência!" },
  { name: "Lucas Silva", rating: 5, date: "2024-08-20", comment: "Ambiente agradável e equipe muito atenciosa. Senti-me acolhida do início ao fim." },
  { name: "Gabriel Almeida", rating: 5, date: "2024-08-21", comment: "Adorei a variedade de produtos! Com certeza, uma loja que se destaca pela qualidade."},
  { name: "Juliana Costa", rating: 5, date: "2024-08-22", comment: "Ótima relação custo-benefício. Fui muito bem atendida e não tenho do que reclamar."},
  { name: "Sofia Martins", rating: 5, date: "2024-08-23", comment: "A loja superou minhas expectativas! Amei a organização e a apresentação dos produtos." },
  { name: "Camila Pereira", rating: 5, date: "2024-08-24", comment: "Produtos incríveis e equipe simpática. Uma experiência maravilhosa que quero repetir!" },
  { name: "Nayara Ferreira", rating: 5, date: "2024-08-25", comment: "Estou muito satisfeito com minha compra. O atendimento foi atencioso e eficiente" },
  { name: "Eduardo Mendes", rating: 5, date: "2024-08-26", comment: "Loja bem organizada e com promoções ótimas. A visita valeu a pena e voltarei em breve." },
  { name: "Tatiane Lima", rating: 4, date: "2024-08-27", comment: "Serviço rápido e eficiente. Realmente, é um lugar que recomendo a todos os amigos." },
  { name: "Olivia Souza", rating: 4, date: "2024-08-28", comment: "Aconselho a todos! Uma das melhores lojas que já visitei, com certeza vou voltar." },
];

const commentsPerPage = 3; // Limita a 3 comentários por página.

export default function CommentsBox() {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(comments.length / commentsPerPage);

  // Pars alterar a página atual ao clicar nas setas ou botões de navegação.
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Para calcular os comentários atuais para exibir e renderiza a estrutura de cada um.
  const displayComments = () => {
    const startIdx = currentPage * commentsPerPage;
    const currentComments = comments.slice(startIdx, startIdx + commentsPerPage);

    return (
      <div className="mt-6 pl-6 lg:pr-20 sm:pr-4">
        {currentComments.map((comment, idx) => (
          <div key={idx} className="flex flex-col justify-between mb-6 border-b border-blue-800 pb-4">
            <div className="flex flex-row items-center justify-start items-start space-x-4">
                  <img src={ICONS.overviewImages.profile_vector} alt="" />
              
            <div className="flex flex-col items-start">
              <div className="font-semibold">{comment.name}</div>
              <div className="flex mt-1">
                {[...Array(5)].map((_, starIdx) => (
                  <svg
                    key={starIdx}
                    className={`w-[12px] h-[12px] ${starIdx < comment.rating ? "text-blue-800" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.71 5.26h5.522c.97 0 1.371 1.24.588 1.81l-4.47 3.244 1.71 5.26c.3.92-.755 1.688-1.54 1.125L10 15.347l-4.47 3.244c-.785.563-1.84-.205-1.54-1.125l1.71-5.26-4.47-3.244c-.784-.57-.382-1.81.588-1.81h5.522l1.71-5.26z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs pt-[2px]">{comment.date}</p>
            </div>
          </div>
            <p className="mt-2 pr-10">{comment.comment}</p>
          </div>
        ))}

        {/* Pagination */}
        <div className="flex items-center justify-center  space-x-2 mt-4 pb-20">
          <button
            onClick={() => handlePageChange(currentPage > 0 ? currentPage - 1 : 0)}
            disabled={currentPage === 0}
            className="p-2 text-blue-800 disabled:opacity-50"
          >
            <ChevronLeft />
          </button>
          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx}
              className={`w-8 h-8 rounded-lg border-blue-800 border-[1px] ${currentPage === idx ? 'bg-blue-500 text-white' : 'bg-white text-blue-800'}`}
              onClick={() => handlePageChange(idx)}
            >
              {idx + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage < totalPages - 1 ? currentPage + 1 : currentPage)}
            disabled={currentPage === totalPages - 1}
            className="p-2 text-blue-800 disabled:opacity-50"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full pt-20 pl-10 mx-auto shadow-2xl rounded-lg">
      <h1 className="text-3xl font-bold pb-4">Avaliações sobre a Franquia</h1>
      <div className="flex flex-col justify-start space-x-4 pl-2">
            <div className="flex flex-row items-center justify-start gap-2">
              <p className="text-lg font-semibold pl-4 ">4.7</p>
            <div className="flex items-center justify-center">
              {[...Array(5)].map((_, starIdx) => (
                <svg
                  key={starIdx}
                  className={`w-4 h-4 ${starIdx < 4.7 ? "text-blue-800" : "text-gray-300"}`} 
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.71 5.26h5.522c.97 0 1.371 1.24.588 1.81l-4.47 3.244 1.71 5.26c.3.92-.755 1.688-1.54 1.125L10 15.347l-4.47 3.244c-.785.563-1.84-.205-1.54-1.125l1.71-5.26-4.47-3.244c-.784-.57-.382-1.81.588-1.81h5.522l1.71-5.26z" />
                </svg>
              ))}
            </div>
            </div>
            <div className="flex items-center justify-start text-sm pb-4">
              <p>(32) Avaliações</p>
            </div>
            <div className="pt-2 pr-10">
                <hr className="border-[1px] border-blue-800" />
            </div>
          </div>
      // Para exibir os comentários paginados.
      {displayComments()}
    </div>
  );
}


