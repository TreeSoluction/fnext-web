"use client";

import Header from "@/components/Header";
import { Editor } from "@tinymce/tinymce-react";
import { useState } from "react";

export default function Franchises() {
  const [businessModels, setBusinessModels] = useState<IBusinessModel[]>([]);
  const [videos, setVideos] = useState<string[]>([]);

  function addVideos() {
    if (document.getElementById("video")) {
      let newVideoLink = document.getElementById("video")?.value.toString();
      if (!newVideoLink) {
        return;
      }

      newVideoLink.split(",").forEach((video) => {
        console.log(video);

        setVideos([...videos, video]);
      });

      document.getElementById("video").value = null;
    }
  }

  function removeVideo(video: string) {
    setVideos(videos.filter((v) => v !== video));
  }

  return (
    <div>
      <Header>
        <a className="flex gap-2 items-center font-bold text-white " href="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-caret-left-fill"
            viewBox="0 0 16 16"
          >
            <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
          </svg>
          <p>Voltar</p>
        </a>
      </Header>
      <div className="flex flex-col justify-center items-center gap-6 pt-8 text-center bg-gray-50">
        <div className="shadow-md businessRegisterSection gap-4">
          <div className="text-xl text-start">Informacoes da Franquia</div>
          <div className="flex flex-col">
            <label htmlFor="nomeFranquia" className="text-sm text-start">
              Nome da Franquia
            </label>
            <input id="nomeFranquia"></input>
          </div>
          <div className="flex flex-col">
            <div className="text-sm text-start">Descreva Franquia</div>
            <Editor
              apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
              init={{
                height: "15vh",
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | removeformat | help",
              }}
            ></Editor>
          </div>
          <div className="flex flex-col">
            <div className="text-sm text-start">Descricao da Franquia</div>
            <Editor
              apiKey={process.env.NEXT_PUBLIC_TINY_API_KEY}
              init={{
                height: "15vh",
                menubar: false,
                plugins: [
                  "advlist autolink lists link image charmap print preview anchor",
                  "searchreplace visualblocks code fullscreen",
                  "insertdatetime media table paste code help wordcount",
                ],
                toolbar:
                  "undo redo | formatselect | bold italic backcolor | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | removeformat | help",
              }}
            ></Editor>
          </div>
        </div>

        <div className="shadow-md businessRegisterSection gap-3">
          <div className="text-xl text-start">Segmento de Atuacao</div>
          <select name="" id="">
            <option value="">Volvo</option>
            <option value="">Saab</option>
            <option value="">Opel</option>
            <option value="">Audi</option>
          </select>
        </div>
        <div className="shadow-md businessRegisterSection gap-3">
          <div className="text-xl text-start">Logo</div>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="logo"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 rounded-lg cursor-pointer bg-white"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (Max 2MB Dimensoes:250x150)
                </p>
              </div>
              <input id="logo" multiple type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div className="shadow-md businessRegisterSection gap-3">
          <div className="text-xl text-start">Imagens</div>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="images"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 rounded-lg cursor-pointer bg-white"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (Max 2MB Dimensoes:250x150)
                </p>
              </div>
              <input id="images" multiple type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div className="shadow-md businessRegisterSection gap-3">
          <div className="text-xl text-start">Videos</div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-start">
                URL de videos sobre sua franquia (opcional)
              </label>
              <div className="flex gap-1">
                <input id="video" className="w-10/12"></input>
                <button
                  onClick={addVideos}
                  className="addButton w-2/12 text-white hover:shadow-inner"
                >
                  Adicionar
                </button>
              </div>
              <div className="flex flex-col videoContainerSection">
                <ul className="ml-5 justify-start items-start ">
                  {videos.map((video) => {
                    return (
                      <div key={video} className="flex gap-3 items-center ">
                        <div className="flex w-full gap-5 p-1">
                          <li
                            className="w-11/12 text-sm text-start"
                            key={video}
                          >
                            {video}
                          </li>
                          <button
                            onClick={() => removeVideo(video)}
                            className="w-1/12 removeButton"
                          >
                            X
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-start">
              URL do site da sua franquia
            </label>
            <input></input>
          </div>
        </div>
        <div className="shadow-md businessRegisterSection gap-3">
          <div className="text-xl text-start">Informacoes Financeiras</div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col 2xl:flex-row justify-between gap-2">
              <div className="flex flex-col">
                <label className="text-sm text-start">
                  Faturamento medio mensal
                </label>
                <div className="flex flex-col">
                  <div className="flex">
                    <label className="flex w-1/5  items-center justify-center headerOfInput">
                      <p>R$</p>
                    </label>
                    <input type="number" className="flex w-4/5"></input>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-start">Unidades no Brasil</label>
                <input type="number" min={0} required></input>
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-start">Sede</label>
                <input></input>
              </div>
            </div>
            <div>
              <div className="flex flex-col 2xl:flex-row justify-between gap-2">
                <div className="flex flex-col">
                  <label className="text-sm text-start">
                    Retorno de Investimento
                  </label>
                  <div className="flex">
                    <label className="flex w-1/5 items-center justify-center headerOfInput">
                      <p>%</p>
                    </label>
                    <input
                      type="number"
                      max={100}
                      min={1}
                      className="flex w-4/5"
                    ></input>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm text-start">Ate</label>
                  <input></input>
                </div>
                <div className="flex flex-col invisible">
                  <label className="text-sm text-start">Sede</label>
                  <input></input>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-md businessRegisterSection gap-3">
          <div className="text-xl text-start">Modelos de Negocio</div>
          <div className="text-sm text-start">
            Por favor, selecione as categorias de atuacao da sua franquia e
            forneca as informacoes financeiras pertinentes a cada uma delas
          </div>
          <button>Adicionar Modelo</button>
        </div>
      </div>
    </div>
  );
}
