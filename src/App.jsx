import SplitBillsComp from "./components/split-bills/SplitBillsComp";
import Header from "./components/ui/Header";
export default function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <SplitBillsComp />
      </div>
    </div>
  );
}
