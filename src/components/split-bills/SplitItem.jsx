import SplitBills from "./SplitBills";
export default function SplitItem({
  addNew,
  handleSelectSplitBillsForm,
  selectSplitBillsForm,
}) {
  return (
    <div className="bg-yellow-400 lg:p-10 shadow-sm shadow-[#f1f1f1] rounded-md">
      <ul>
        {addNew.map((friend) => (
          <SplitBills
            friend={friend}
            name={friend.name}
            balance={friend.balance}
            key={friend.id}
            image={friend.image}
            handleSelectSplitBillsForm={handleSelectSplitBillsForm}
            selectSplitBillsForm={selectSplitBillsForm}
          />
        ))}
      </ul>
    </div>
  );
}
