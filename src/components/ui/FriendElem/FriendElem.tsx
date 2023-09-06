import React from "react";

interface FriendProps extends React.HTMLAttributes<HTMLButtonElement> {
  imageFriend: any;
  titleFriend: any;
}
export const FriendElem = ({
  imageFriend,
  titleFriend,
}: FriendProps) => {
  return (
    <>
      <div className="friend">
        <img src={imageFriend} alt="Friend" />
        <span className="friend__name">{titleFriend}</span>
      </div>
    </>
  );
};
