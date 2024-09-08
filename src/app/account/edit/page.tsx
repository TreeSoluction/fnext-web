"use client";
// TODO FAZER TELA DE VISUALIZACAO DE PERFIL
import Header from "@/components/Header";
import { GetUserData } from "@/services/User/get.user";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Plans() {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    async function getInfo(): Promise<any> {
      return await GetUserData("a19b4dd0-0e59-4003-b807-f258bde9387e");
    }

    getInfo().then((res) => {
      const nameParts = res.data.data.name.split(" ");
      const capitalizedParts = nameParts.map(
        (part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase(),
      );
      const capitalizedFullName = capitalizedParts.join(" ");

      setUserName(capitalizedFullName);
      setUserEmail(res.data.data.email.toLowerCase());
    });
  }, []);

  function saveUserData() {
    axios
      .put("http://localhost:3001/user", {
        id: "a19b4dd0-0e59-4003-b807-f258bde9387e",
        fullName: userName,
        email: userEmail,
      })
      .then(
        (res) => {
          alert("usuario atualizado");
        },
        (err) => {},
      );
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

      <div className="pt-10 lg:pt-64">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-5">
            <div className="flex flex-col gap-4">
              <div>
                <div>Nome Completo</div>
                <input
                  id="userNameInput"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                ></input>
              </div>
              <div>
                <div>Email</div>
                <input
                  id="userEmailInput"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                ></input>
              </div>
            </div>
            <button
              className="h-10 w-full  bg-blue-900 text-white"
              onClick={saveUserData}
            >
              Salvar Alteracoes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
