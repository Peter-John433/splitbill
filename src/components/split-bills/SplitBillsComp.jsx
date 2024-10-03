import SplitItem from "./SplitItem";

export default function SplitBillsComp({
  addNew,
  handleSelectSplitBillsForm,
  selectSplitBillsForm,
}) {
  return (
    <div>
      {/* <SplitItem splitBillsItem={splitBillsItem} /> */}
      <SplitItem
        addNew={addNew}
        handleSelectSplitBillsForm={handleSelectSplitBillsForm}
        selectSplitBillsForm={selectSplitBillsForm}
      />
    </div>
  );
}
