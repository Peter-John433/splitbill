import SplitItem from "./SplitItem";

const splitBillsItem = [
  { name: "jane", balance: 40, id: 1, image: "https://i.pravatar.cc/41" },
  { name: "martha", balance: -6, id: 2, image: "https://i.pravatar.cc/45" },
  { name: "john", balance: 0, id: 3, image: "https://i.pravatar.cc/48" },
];

export default function SplitBillsComp() {
  return (
    <div>
      <SplitItem splitBillsItem={splitBillsItem} />
    </div>
  );
}
