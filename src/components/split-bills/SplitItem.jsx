import SplitBills from "./SplitBills";
export default function SplitItem({ splitBillsItem }) {
  const friends = splitBillsItem;
  return (
    <div className="bg-yellow-400 p-10 shadow-sm shadow-[#f1f1f1] rounded-md lg:w-1/2">
      <ul>
        {friends.map((friend) => (
          <SplitBills
            name={friend.name}
            balance={friend.balance}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </ul>
    </div>
  );
}
