import Button from "./friend-list/button/Button";
export default function Friends({ friend }) {
  return (
    <>
      <li>{friend.name}</li>
      <span
        style={friend.bal < 0 ? { backgroundColor: "red", color: "white" } : {}}
      >
        {friend.bal < 0
          ? `you owe your friend ${friend.name} $${Math.abs(friend.bal)}`
          : ""}
      </span>

      <span
        style={
          friend.bal > 0 ? { backgroundColor: "green", color: "black" } : {}
        }
      >
        {friend.bal > 0
          ? `your friend ${friend.name} owed you $${friend.bal}`
          : ""}
      </span>

      <span>{friend.bal === 0 ? `you and your friend are even` : ""}</span>
      <Button bg="orange" color="black" width="150">
        select
      </Button>
    </>
  );
}
