import EatAndSplit from "./components/eat-and-split/EatAndSplit";
import AddFriends from "./components/eat-and-split/friend-list/AddFriends";
import Button from "./components/eat-and-split/friend-list/button/Button";
import FormSplitBill from "./components/eat-and-split/friend-list/FormSplitBill";

const eatAndSplitList = [
  { name: "james", id: 1, bal: 20 },
  { name: "mathew", id: 2, bal: -7 },
  { name: "jane", id: 3, bal: 0 },
  { name: "jane", id: 3, bal: -5 },
];

function App() {
  return (
    <div>
      <h1>Eat and Split app</h1>
      <EatAndSplit eatAndSplitList={eatAndSplitList} />
      <AddFriends />
      <Button bg="green" color="white" width="150">
        Add Friends
      </Button>
      <hr />

      <FormSplitBill />
    </div>
  );
}

export default App;
