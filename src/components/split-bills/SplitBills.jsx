export default function SplitBills({ name, balance, image }) {
  return (
    <div>
      <li className="list-none flex gap-x4 items-center justify-between">
        <img src={image} alt={name} />
        {name}
        <span>{balance}</span>
        <button>select</button>
      </li>
    </div>
  );
}
