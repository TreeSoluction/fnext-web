"use client";

import FranchiseCard from "@/components/Cards/franchise";
import Header from "@/components/Header";
import { ListFranchise } from "@/services/Franchises/list.franchise";
import { useEffect, useState } from "react";

export default function Home() {
  const [franchises, setFranchises] = useState<any[]>([]);

  useEffect(() => {
    const loadFranchises = async () => {
      console.log("query");
      const result = await ListFranchise();
      setFranchises(result.data);
      console.log(franchises);
    };

    loadFranchises();
  }, [""]);

  return (
    <div>
      <Header></Header>
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
