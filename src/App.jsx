import SplitBillsComp from "./components/split-bills/SplitBillsComp";
import AddFriendsForm from "./components/splitforms/AddFriendsForm";
import SplitBillsForm from "./components/splitforms/SplitBillsForm";
import Buttons from "./components/buttons/Buttons";
import Header from "./components/ui/Header";
import { useState } from "react";
import AddMoreFriends from "./AddMore";

const splitBillsItem = [
  {
    name: "jane",
    balance: 40,
    id: 1,
    image: "https://i.pravatar.cc/48",
  },
  {
    name: "martha",
    balance: -6,
    id: 2,
    image: "https://i.pravatar.cc/44",
  },
  {
    name: "john",
    balance: 0,
    id: 3,
    image: "https://i.pravatar.cc/41",
  },
];

export default function App() {
  const buttonStyle =
    "bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-600 hover:outline-yellow-400 py-1  w-[100px] rounded-full text-[10px] mt-3 text-black lg:text-xs font-bold shadow-sm shadow-[#f1f1f1] hover:border-b-2 hover:border-[#f1f1f1]";

  const [showForm, setShowForm] = useState(false);
  const [addNew, setAddNew] = useState(splitBillsItem);
  const [selectSplitBillsForm, setSelectSplitBillsForm] = useState(null);

  function handleShowForm() {
    setShowForm((c) => !c);
  }

  function addNewFriend(friend) {
    setAddNew((friends) => [...friends, friend]);
    setShowForm(false);
  }

  function handleSelectSplitBillsForm(friend) {
    // setSelectSplitBillsForm(friend);

    //if the current selectedfriend id is exact equal to the new friend id then set it to null else show friend details in the form
    setSelectSplitBillsForm((cur) => (cur?.id === friend.id ? null : friend));
    setShowForm(false);
  }

  function handleSplitBillsFormPaid(value) {
    // console.log(value);
    setAddNew((friends) =>
      friends.map((friend) =>
        friend.id === selectSplitBillsForm.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectSplitBillsForm(null);
  }

  return (
    <div>
      <Header />
      <div className="container grid grid-cols-1 lg:grid-cols-2 my-10 gap-y-3 lg:gap-x-10">
        <div>
          <SplitBillsComp
            addNew={addNew}
            handleSelectSplitBillsForm={handleSelectSplitBillsForm}
            selectSplitBillsForm={selectSplitBillsForm}
          />

          {showForm ? (
            <AddFriendsForm addNewFriend={addNewFriend} />
          ) : (
            <AddMoreFriends />
          )}

          <Buttons onClick={handleShowForm} buttonStyle={buttonStyle}>
            {showForm ? "close" : "Add friends"}
          </Buttons>
        </div>

        {selectSplitBillsForm && (
          <SplitBillsForm
            selectSplitBillsForm={selectSplitBillsForm}
            onSplit={handleSplitBillsFormPaid}
          />
        )}
      </div>
    </div>
  );
}
