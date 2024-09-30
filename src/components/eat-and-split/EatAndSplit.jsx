import Friends from "./Friends";

export default function EatAndSplit({ eatAndSplitList }) {
  const friends = eatAndSplitList;
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friends friend={friend} key={friend.id} />
        ))}
      </ul>
    </div>
  );
}
