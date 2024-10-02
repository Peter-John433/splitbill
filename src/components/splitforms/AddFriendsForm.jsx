import Buttons from "../buttons/Buttons";
import { useState } from "react";
export default function AddFriendsForm() {
  const buttonStyle =
    "bg-yellow-600 hover:bg-yellow-400 focus:bg-yellow-600 hover:outline-yellow-400 py-1 w-[50px] rounded-full text-[10px] lg:text-xs font-bold shadow-sm shadow-[#f1f1f1] hover:border-b-2 hover:border-[#f1f1f1]";

  const [name, setName] = useState("");
  const [image, setImage] = useState("image url");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-yellow-500 p-10 shadow-sm shadow-[#f1f1f1] rounded-md lg:w-2/3 mt-3">
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
        <div className="flex flex-col gap-y-2">
          <label className="text-black font-bolder text-xs lg:text-[14px]">
            friend's name
          </label>
          <input
            type="text"
            placeholder="add friend.."
            value={name}
            className="w-1/2 border-none outline-none hover:outline-yellow-500 focus:outline-white rounded-full placeholder:text-xs lg:placeholder:text-[14px] px-2 lg:px-3 text-black"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label className="text-black font-bolder text-xs lg:text-[14px]">
            image url
          </label>
          <input
            value={image}
            type="text"
            className="w-1/2 border-none outline-none hover:outline-yellow-500 focus:outline-white rounded-full placeholder:text-xs lg:placeholder:text-[14px] px-2 lg:px-3 text-black"
          />
        </div>
        <Buttons buttonStyle={buttonStyle}>Add</Buttons>
      </form>
    </div>
  );
}
