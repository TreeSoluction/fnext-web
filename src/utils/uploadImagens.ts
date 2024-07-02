import axios from "axios";

export const UploadImage = async (inputFile: File) => {
  const ziplineUrl = process.env.NEXT_PUBLIC_ZIPLINE;

  const formData = await new Promise<FormData>((resolve) => {
    const reader = new FileReader();

    reader.onload = () => {
      const formData = new FormData();
      formData.append(inputFile.name, inputFile);
      resolve(formData);
    };

    reader.readAsDataURL(inputFile);
  });

  if (formData.has(inputFile.name)) {
    try {
      const upload = await axios.post(`${ziplineUrl}/api/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (upload.status !== 200) {
        return null;
      }

      return upload.data.files[0];
    } catch (error) {
      console.error("Erro ao enviar imagem:", error);
      return null;
    }
  } else {
    console.log("FormData está vazio ou não contém o campo necessário.");
    return null;
  }
};
