import Buttons from "../buttons/Buttons";

export default function SplitBillsForm() {
  const buttonStyle =
    "bg-yellow-600 hover:bg-yellow-400 focus:bg-yellow-600 hover:outline-yellow-400 py-1 w-[100px] mt-5 rounded-full text-[10px] lg:text-xs font-bold shadow-sm shadow-[#f1f1f1] hover:border-b-2 hover:border-[#f1f1f1]";

  return (
    <div className="bg-yellow-500 p-10 shadow-sm shadow-[#f1f1f1] rounded-md lg:h-[350px]">
      <form className="flex flex-col gap-y-3">
        <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-x-3 items-center lg:justify-between">
          <label className="text-black font-bolder text-xs lg:text-[14px]">
            Bill's value
          </label>
          <input
            type="number"
            className="w-1/2 border-none outline-none hover:outline-yellow-500 focus:outline-white rounded-full placeholder:text-xs lg:placeholder:text-[14px] px-2 lg:px-3 text-black"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-x-3 items-center lg:justify-between ">
          <label className="text-black font-bolder text-xs lg:text-[14px]">
            Your expenses
          </label>
          <input
            type="number"
            className="w-1/2 border-none outline-none hover:outline-yellow-500 focus:outline-white rounded-full placeholder:text-xs lg:placeholder:text-[14px] px-2 lg:px-3 text-black"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-x-3 items-center lg:justify-between ">
          <label className="text-black font-bolder text-xs lg:text-[14px]">
            X expenses
          </label>
          <input
            type="number"
            disabled
            className="w-1/2 border-none outline-none hover:outline-yellow-500 focus:outline-white rounded-full placeholder:text-xs lg:placeholder:text-[14px] px-2 lg:px-3 text-black"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-y-2 lg:gap-x-3 items-center lg:justify-between ">
          <label className="text-black font-bolder text-xs lg:text-[14px]">
            Who's paying the bills
          </label>
          <select
            type="number"
            className="w-1/2 border-none outline-none hover:outline-yellow-500 focus:outline-white rounded-full text-xs text-[14px] px-2 lg:px-3 text-black"
          >
            <option value="">you</option>
            <option value="">X</option>
          </select>
        </div>
        <Buttons buttonStyle={buttonStyle}>Split Bills</Buttons>
      </form>
    </div>
  );
}
