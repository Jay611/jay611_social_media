import React from "react";
import LeftSide from "../../components/message/LeftSide";
import RightSide from "../../components/message/RightSide";

const Conversation = () => {
  return (
    <div className="message d-flex">
      <div className="col-4 border-end px-0 hide_left">
        <LeftSide />
      </div>
      <div className="col-8 px-0 show_right">
        <RightSide />
      </div>
    </div>
  );
};

export default Conversation;
