import Button from "./button/Button";
export default function FormSplitBill() {
  return (
    <div>
      <form>
        <span>
          <label>bill value</label>
          <input type="text" />
        </span>
        <span>
          <label>your expenses</label>
          <input type="text" />
        </span>
        <span>
          <label>x expenses</label>
          <input type="text" disabled />
        </span>
        <select>
          <option value="">you</option>
          <option value="">x</option>
        </select>
        <Button bg="orange" color="black" width="150">
          Split Bill
        </Button>
      </form>
    </div>
  );
}
