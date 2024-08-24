"use client";

import FranchiseCard from "@/components/Cards/franchise";
import Header from "@/components/Header";
import { AuthContext } from "@/contexts/auth.context";
import { ListFranchise } from "@/services/Franchises/list.franchise";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const [franchises, setFranchises] = useState<any[]>([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const loadFranchises = async () => {
      const result = await ListFranchise();
      setFranchises(result.data);
    };

    loadFranchises();
  }, [""]);

  return (
    <div>
      <Header user={user} />
      <div className="p-1 justify-center flex items-center">
        <div className="p-10 gap-8 flex justify-start flex-wrap">
          {franchises.map((element) => (
            <FranchiseCard
              key={element.id}
              name={element.name}
              image={element.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
