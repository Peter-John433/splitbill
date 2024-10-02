import SplitBillsComp from "./components/split-bills/SplitBillsComp";
import AddFriendsForm from "./components/splitforms/AddFriendsForm";
import SplitBillsForm from "./components/splitforms/SplitBillsForm";
import Buttons from "./components/buttons/Buttons";
import Header from "./components/ui/Header";
import { useState } from "react";
export default function App() {
  const buttonStyle =
    "bg-yellow-500 hover:bg-yellow-400 focus:bg-yellow-600 hover:outline-yellow-400 py-1 lg:w-[100px] rounded-full text-[10px] mt-3 text-black lg:text-xs font-bold shadow-sm shadow-[#f1f1f1] hover:border-b-2 hover:border-[#f1f1f1]";
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <Header />
      <div className="container grid grid-cols-1 lg:grid-cols-2 mt-10 gap-y-3 lg:gap-x-10">
        <div>
          <SplitBillsComp />
          {showForm && <AddFriendsForm />}
          <Buttons
            onClick={() => setShowForm((show) => !show)}
            buttonStyle={buttonStyle}
          >
            Add friends
          </Buttons>
        </div>
        <SplitBillsForm />
      </div>
    </div>
  );
}
