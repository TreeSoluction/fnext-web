// "use client"

// import React, { useState } from 'react';
// import { ICONS } from "@/constants/icons";

// export default function ProfileImageUpload() {
//     const [imagePreview, setImagePreview] = useState<string>(ICONS.profile_image);

//   const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result as string);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
//       <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden mb-4">
//         {imagePreview ? (
//           <img src={imagePreview} alt="Profile" className="w-full h-full object-cover" />
//         ) : (
//           <p className="text-center pt-10 text-gray-500">Sem imagem</p>
//         )}
//       </div>
//       <label
//         htmlFor="profileImage"
//         className=" flex flex-row bg-slate-100 text-black hover:bg-slate-200 font-semibold gap-4 px-4 py-2 rounded-md cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105"
//       >
//          <img width={18} height={18} src={ICONS.mini_image} alt="" />
//         Trocar foto
//       </label>
//       <input
//         id="profileImage"
//         type="file"
//         className="hidden"
//         accept="image/*"
//         onChange={handleImageChange}
//       />
//     </div>
//   );
// }




"use client"

import React, { useState } from 'react';
import { ICONS } from "@/constants/icons";

export default function ProfileImageEdit() {
  const [profileImage, setProfileImage] = useState(ICONS.profile_image);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setProfileImage('');
  };

  return (
    <div className="flex flex-row lg:flex-col items-center justify-center w-full lg:w-40 sm:gap-0 gap-4 ">
      <div className="w-32 h-32 rounded-full overflow-hidden bg-white">
        {profileImage ? (
          <img src={profileImage} alt="Profile" className="object-cover w-full h-full" />
        ) : (
          ""
        )}
      </div>

      <div className="flex flex-col mt-4 flex gap-4">
      <label
        htmlFor="profileImage"
        className="flex flex-row w-40 bg-slate-100 text-black hover:bg-slate-200 font-semibold gap-4 px-4 py-2 rounded-md cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105"
      >
         <img width={18} height={18} src={ICONS.mini_image} alt="" />
        Trocar foto
      </label>
      <input
        id="profileImage"
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleImageChange}
      />
        <button
          onClick={handleRemoveImage}
          
          className="flex flex-row w-40 bg-slate-100 text-black hover:bg-slate-200 font-semibold gap-2 px-2 py-2 rounded-md cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105"
        >
            <img width={27} height={27} src={ICONS.remove_profile_image} alt="" />
          Remover foto
        </button>
      </div>
    </div>
  );
}

