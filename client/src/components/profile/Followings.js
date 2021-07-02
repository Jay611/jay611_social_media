import React from "react";
import UserCard from "../UserCard";
import FollowBtn from "../FollowBtn";
import { useSelector } from "react-redux";

const Followings = ({ users, setShowFollowings }) => {
  const { auth } = useSelector((state) => state);
  return (
    <div className="follow">
      <div className="follow_box">
        <h5 className="text-center">Followings</h5>
        <hr />

        {users.map((user) => (
          <UserCard
            key={user._id}
            user={user}
            setShowFollowings={setShowFollowings}
          >
            {auth.user._id !== user._id && <FollowBtn user={user} />}
          </UserCard>
        ))}
        <div className="close" onClick={() => setShowFollowings(false)}>
          &times;
        </div>
      </div>
    </div>
  );
};

export default Followings;

