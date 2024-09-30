import Buttons from "../buttons/Buttons";
export default function SplitBills({ name, balance, image }) {
  const buttonStyle =
    "bg-yellow-400 py-1 px-3 rounded-full text-[10px] lg:text-xs font-bold";

  return (
    <div>
      <li className="list-none flex mb-5 justify-between items-center gap-x-10 text-xs lg:text-[14px] font-bolder  text-black bg-yellow-500 p-3 transition-all ease-in-out duration-300 hover:bg-yellow-300 hover:shadow-sm hover:shawdow-[#d0d0d0]">
        <img src={image} alt={name} />
        <span>
          <span>{name}</span>
          <p className="mt-2">
            <span className={balance < 0 && "text-red-700"}>
              {balance < 0 && `you owe ${name}  $${Math.abs(balance)}`}
            </span>
            <span className={balance > 0 && "text-green-700"}>
              {balance > 0 && `${name} owes you ${balance}`}
            </span>
            <span>{balance === 0 && `you and ${name} are even`}</span>
          </p>
        </span>
        <Buttons buttonStyle={buttonStyle}>Select</Buttons>
      </li>
    </div>
  );
}
