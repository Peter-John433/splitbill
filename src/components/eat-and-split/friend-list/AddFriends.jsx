import Button from "./button/Button";
export default function AddFriends() {
  return (
    <div>
      <form>
        <div>
          <label>friend's name</label>
          <input type="text" />
        </div>
        <div>
          <label>friend's id</label>
          <input type="text" />
        </div>

        <Button bg="red" color="white" width="150">
          Add
        </Button>
      </form>
    </div>
  );
}
