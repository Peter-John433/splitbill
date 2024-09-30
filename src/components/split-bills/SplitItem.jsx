import SplitBills from "./SplitBills";
export default function SplitItem({ splitBillsItem }) {
  const friends = splitBillsItem;
  return (
    <div className="bg-orange-400">
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
