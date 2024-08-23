"use client";
export default function FranchiseCard({ name, image }) {
  return (
    <div className="bg-slate-300 p-1 gap-2 flex flex-col justify-center items-center rounded-lg w-64 h-64">
      <div className="flex bg-blue-600 p-1 rounded-lg h-full w-full">
        {image}
      </div>
      <div className="flex bg-gray-700 p-1 rounded-lg w-full justify-center items-center">
        <div className="flex font-bold text-white ">{name}</div>
      </div>
    </div>
  );
}
