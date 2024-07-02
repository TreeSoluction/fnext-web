"use client";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Search } from "lucide-react";
import { ChangeEvent, Fragment, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

// Components
import { Divider } from "@/components/Divider";
import { Container, FormContainer } from "./components/container";
import { Input, InputImage, TextArea } from "./components/form/inputs";
import { StatusToggle } from "./components/form/toggle";
import { Model } from "./components/model";

// Interfaces
import { IModel } from "@/interfaces/IModel";
import { UploadImage } from "@/utils/uploadImagens";

export default function Franchise() {
  const [isOpenModel, setIsOpenModel] = useState<boolean>(false);
  const modelRef = useRef<HTMLFormElement>(null);
  const [models, setModels] = useState<IModel[]>([]);

  const form = useForm({
    defaultValues: {
      name: "",
      description: "",
      secondaryDescription: "",
      operatingSegment: "",
      operatingSegmentMessage: "",
      logoImg: "",
    },
  });

  useEffect(() => {
    if (isOpenModel && modelRef.current) {
      modelRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpenModel]);

  const toggleModel = () => {
    setIsOpenModel((s) => !s);
  };

  const addModel = (data: IModel) => {
    setModels((s) => [...s, data]);
  };

  const [switchState, setSwitchState] = useState<boolean>(true);
  const [nameState, setNameState] = useState<string>("");
  const [franchiseDescriptionFrist, setFranchiseDescriptionFrist] =
    useState<string>("");
  const [franchiseDescriptionSecond, setFranchiseDescriptionSecond] =
    useState<string>("");

  const [logoImg, setLogoImg] = useState<{ file: File | null; img: string }>({
    file: null,
    img: "",
  });

  const [otherImg, setOtherImg] = useState<
    { file: File | null; img: string }[]
  >([
    {
      file: null,
      img: "",
    },
  ]);

  //Videos
  const [videoURL, setVideoURL] = useState<string>("");
  const [validUrl, setValidUrl] = useState<boolean>(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSwitchState((s) => !s);
  };

  const handleOnNameState = (e: ChangeEvent<HTMLInputElement>) => {
    setNameState(e.target.value);
  };

  const handleOnfranchiseDescriptionFrist = (event: any, editor: any) => {
    const data = editor.getData();
    setFranchiseDescriptionFrist(data);
  };

  const handleOnfranchiseDescriptionSecond = (event: any, editor: any) => {
    const data = editor.getData();
    setFranchiseDescriptionSecond(data);
  };

  const handleLogoImg = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size <= 2 * 1024 * 1024) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          setLogoImg({ file: file, img: evt.target?.result as string });
        };
        reader.readAsDataURL(file);
      } else {
        alert("O arquivo deve ser uma imagem em png ou jpg até 2MB.");
      }
    }
  };

  const onDropImg = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];

    if (file) {
      if (file.size <= 2 * 1024 * 1024) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          setLogoImg({ file: file, img: evt.target?.result as string });
        };
        reader.readAsDataURL(file);
      } else {
        alert("O arquivo deve ser uma imagem em png ou jpg até 2MB.");
      }
    }
  };

  const handleFranchiseImgs = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size <= 2 * 1024 * 1024 && otherImg.length <= 4) {
        const reader = new FileReader();

        reader.onload = (evt) => {
          setOtherImg((s) => [
            { file: file, img: evt.target?.result as string },
            ...s,
          ]);
        };

        reader.readAsDataURL(file);
      } else {
        alert("O arquivo deve ser uma imagem em png ou jpg até 2MB.");
      }
    }
  };

  const onDropOtherImg = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];

    if (file) {
      if (file.size <= 2 * 1024 * 1024 && otherImg.length <= 4) {
        const reader = new FileReader();

        reader.onload = (evt) => {
          setOtherImg((s) => [
            { file: file, img: evt.target?.result as string },
            ...s,
          ]);
        };

        reader.readAsDataURL(file);
      } else {
        alert("O arquivo deve ser uma imagem em png ou jpg até 2MB.");
      }
    }
  };

  const handleVideoUrl = (e: ChangeEvent<HTMLInputElement>) => {
    if (
      /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\//.test(e.target.value)
    ) {
      setValidUrl(true);

      if (e.target.value.includes("embed")) {
        setVideoURL(e.target.value);
      } else {
        const videoId = e.target.value.split("v=")[1].split("&list=")[0];
        setVideoURL(`https://www.youtube.com/embed/${videoId}`);
      }

      return;
    }

    setValidUrl(false);
  };

  const onSubmit = async () => {
    let logo = "";
    let images: string[] = [];

    if (logoImg) {
      if (logoImg.file) {
        logo = await UploadImage(logoImg.file);
      }
    }

    if (otherImg) {
      otherImg.forEach(async (img) => {
        if (img.file) {
          images.push(await UploadImage(img.file));
        }
      });
    }

    const data = {
      ownerId: "",
      business: {
        sector: "",
        name: "",
        description: "",
        logo,
        images,
        videos: [videoURL],
        site: "",
        average_monthly_billing: 0,
        units_in_brazil: 0,
        headquarters: "",
        ROI_min: 0,
        ROI_max: 0,
      },
      models,
    };
  };

  return (
    <Container>
      <form
        className="flex flex-col gap-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormContainer
          title="Informações da Franquia"
          className="flex flex-col gap-4"
        >
          <StatusToggle
            id={"checked"}
            checked={switchState}
            onChange={handleOnChange}
          />

          <Input
            label="Nome da Franquia"
            id="franchiseName"
            placeholder="Digite o nome da franquia"
            onChange={handleOnNameState}
            value={nameState}
          />

          <TextArea
            maxLength={300}
            label="Descreva a Franquia"
            editor={ClassicEditor}
            onChange={handleOnfranchiseDescriptionFrist}
            id={"describefranchise"}
            characters={franchiseDescriptionFrist.length}
          />

          <TextArea
            maxLength={300}
            label="Descrição da Franquia"
            editor={ClassicEditor}
            id={"franchiseDescription"}
            onChange={handleOnfranchiseDescriptionSecond}
            characters={franchiseDescriptionSecond.length}
          />
        </FormContainer>

        <FormContainer
          title="Segmento de Atuação"
          className="flex flex-col gap-4"
        >
          <Input
            startComponent={<Search className="ml-2" />}
            endComponent={
              <>
                <button className="h-full w-1/5 border-l border-solid border-[#ddd]">
                  Buscar
                </button>
              </>
            }
            placeholder="Buscar segmento de atuação"
          />

          <div className={`segment-atribute-alert`} role="alert">
            "Nenhum Segmento adicionado"
          </div>
        </FormContainer>

        <FormContainer title="Logo" className="flex flex-col gap-4">
          <div className="flex flex-col">
            <InputImage
              label="Selecione sua Logo"
              id="logo"
              img={logoImg.img}
              onChange={handleLogoImg}
              onDrop={onDropImg}
            />
            <span className="text-[0.6rem] text-[#9E9D9D] text-right mt-4">
              Imagem em png ou jpg até 2MB cada. Sugerimos dimensões de 250px X
              150px.
            </span>
          </div>
        </FormContainer>

        <FormContainer title="Imagens" className="flex flex-col gap-4">
          {otherImg.map((img, index) => (
            <div className="flex flex-col" key={index}>
              <InputImage
                onChange={handleFranchiseImgs}
                label="Selecione uma imagem"
                id={img.img === "" ? "firstImg" : String(index)}
                img={img.img}
                onDrop={onDropOtherImg}
              />

              <span className="text-[0.6rem] text-[#9E9D9D] text-right mt-4">
                Imagem em png ou jpg até 2MB cada. Sugerimos dimensões de 250px
                X 150px.
              </span>
            </div>
          ))}
        </FormContainer>

        <FormContainer title="Vídeos" className="flex flex-col gap-4">
          <Input
            onChange={handleVideoUrl}
            type="url"
            id="franchiseVideoUrl"
            placeholder="https://..."
            label={
              <>
                URL de vídeo sobre sua Franquia <span>(opcional) &#9432;</span>
              </>
            }
          />

          {videoURL && validUrl ? (
            <iframe
              src={videoURL}
              width={560}
              height={315}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
            />
          ) : null}

          <Input
            type="url"
            placeholder="https://..."
            label={
              <>
                URL do site de sua Franquia<span>(opcional) &#x24D8;</span>
              </>
            }
            id="siteUrl"
          />
        </FormContainer>

        <FormContainer
          title="Informações Financeiras"
          className="flex flex-col gap-4"
        >
          <div className="flex flex-wrap justify-between mt-auto items-end">
            <div className="w-[30%]">
              <Input
                label="Faturamento Médio Mensal"
                type="number"
                id="franchiseFinanceFatmed"
                placeholder="0,00"
              />
            </div>

            <div className="w-[30%]">
              <Input
                label="Unidade no Brasil"
                type="number"
                id="franchiseFinanceUnit"
              />
            </div>

            <div className="w-[30%]">
              <Input label="Sede" type="number" id="franchiseFinanceSede" />
            </div>
          </div>

          <div className="flex flex-wrap justify-between mt-auto items-end">
            <div className="w-[30%]">
              <Input
                label="Retorno de Investimento &#x24D8;"
                type="text"
                id="franchiseFinanceInvestreturnBegin"
              />
            </div>

            <div className="w-[30%]">
              <Input type="number" id="franchiseFinanceInvestreturnUntil" />
            </div>

            <div className="w-[30%]" />
          </div>
        </FormContainer>

        <FormContainer
          title="Modelos de Negócios"
          className="flex flex-col gap-4"
        >
          {models.length <= 0 ? (
            <p className="text-zinc-600">
              Por favor selecione as categorias de atuação de suas franquias e
              forneça as informações financeiras pertinentes a cada uma delas
            </p>
          ) : (
            <>
              {models.map((model, index) => (
                <Fragment key={index}>
                  <p>
                    Adicionado:{" "}
                    <span className="font-medium">{model.name}</span>
                  </p>

                  <Divider />
                </Fragment>
              ))}
            </>
          )}

          <button
            type="button"
            className="px-3 py-2 rounded text-white bg-[#007bff]"
            onClick={() => {
              setIsOpenModel(true);
            }}
          >
            Adicionar Modelo
          </button>
        </FormContainer>

        <div className="flex justify-end gap-4 mb-6">
          <button
            type="button"
            className="px-3 py-2 rounded bg-[#ececec] w-1/4"
          >
            Cancelar
          </button>

          <button
            type="submit"
            className="px-3 py-2 rounded text-white bg-[#007bff] w-1/4"
          >
            Salvar
          </button>
        </div>
      </form>

      <Model
        isOpen={isOpenModel}
        onClose={toggleModel}
        ref={modelRef}
        addModel={addModel}
      />
    </Container>
  );
}
