import Buttons from "../buttons/Buttons";
import { useState } from "react";

export default function SplitBillsForm({ selectSplitBillsForm, onSplit }) {
  const buttonStyle =
    "bg-yellow-600 hover:bg-yellow-400 focus:bg-yellow-600 hover:outline-yellow-400 py-1 w-[100px] mt-5 rounded-full text-[10px] lg:text-xs font-bold shadow-sm shadow-[#f1f1f1] hover:border-b-2 hover:border-[#f1f1f1]";

  const [billsValue, setBillsValue] = useState("");
  const [yourExp, setYourExp] = useState("");
  const paid = billsValue ? billsValue - yourExp : "";
  const [whosPaying, setWhosPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!billsValue || !yourExp) return;
    onSplit(whosPaying === "user" ? paid : -yourExp);
  }

  return (
    <div className="bg-yellow-500 p-5 lg:p-10 shadow-sm shadow-[#f1f1f1] rounded-md lg:h-[350px]">
      <h1 className="transform -skew-x-6 text-center flex items-center justify-center gap-x-3 text-black text-sm lg:text-xl font-bolder capitalize border-b-2 border-b-black mb-5 lg:mb-8 pb-2 lg:pb-2">
        Split a bill with {selectSplitBillsForm.name}{" "}
        {/* <img src={selectSplitBillsForm.image} alt={selectSplitBillsForm.name} /> */}
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-y-3">
        <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-x-3 items-start lg:items-center justify-start lg:justify-between">
          <label className="text-black font-bolder text-xs lg:text-[14px]">
            💵Bill's value
          </label>
          <input
            type="text"
            value={billsValue}
            onChange={(e) => setBillsValue(Number(e.target.value))}
            className="w-full lg:w-1/2 border-none outline-none hover:outline-yellow-500 focus:outline-white rounded-full placeholder:text-xs lg:placeholder:text-[14px] text-xs lg:text-[14px] py-1 px-3 placeholder:text-gray-400 lg:px-3 text-black"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-x-3 items-start lg:items-center justify-start lg:justify-between">
          <label className="text-black font-bolder text-xs lg:text-[14px]">
            🧑‍🤝‍🧑 Your expenses
          </label>
          <input
            type="text"
            value={yourExp}
            onChange={(e) =>
              setYourExp(
                Number(e.target.value) > billsValue
                  ? yourExp
                  : Number(e.target.value)
              )
            }
            className="w-full lg:w-1/2 border-none outline-none hover:outline-yellow-500 focus:outline-white rounded-full placeholder:text-xs lg:placeholder:text-[14px] text-xs lg:text-[14px] py-1 px-3 placeholder:text-gray-400 lg:px-3 text-black"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-x-3 items-start lg:items-center justify-start lg:justify-between">
          <label className="text-black font-bolder text-xs lg:text-[14px]">
            💵 {selectSplitBillsForm.name} expenses
          </label>
          <input
            type="text"
            value={paid}
            disabled
            className="w-full lg:w-1/2 border-none outline-none hover:outline-yellow-500 focus:outline-white rounded-full placeholder:text-xs lg:placeholder:text-[14px] text-xs lg:text-[14px] py-1 px-3 placeholder:text-gray-400 lg:px-3 text-black"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-x-3 items-start lg:items-center justify-start lg:justify-between">
          <label className="text-black font-bolder text-xs lg:text-[14px]">
            🤑 Who's paying the bills
          </label>
          <select
            value={whosPaying}
            onChange={(e) => setWhosPaying(e.target.value)}
            className="w-full lg:w-1/2 border-none outline-none hover:outline-yellow-500 focus:outline-white rounded-full text-xs text-[14px] lg:text-[14px] py-1 px-3 placeholder:text-gray-400 lg:px-3 text-black"
          >
            <option value="user">you</option>
            <option value="friend">{selectSplitBillsForm.name}</option>
          </select>
        </div>
        <Buttons buttonStyle={buttonStyle}>Split Bills</Buttons>
      </form>
    </div>
  );
}
