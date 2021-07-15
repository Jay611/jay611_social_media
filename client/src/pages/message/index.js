import React from "react";
import LeftSide from "../../components/message/LeftSide";

const Message = () => {
  return (
    <div className="message d-flex">
      <div className="col-md-4 border-end px-0 show_left">
        <LeftSide />
      </div>
      <div className="col-md-8 px-0 hide_right">
        <div className="d-flex justify-content-center align-items-center flex-column h-100">
          <i
            className="fab fa-facebook-messenger text-primary"
            style={{ fontSize: "5rem" }}
          />
          <h4>Messenger</h4>
        </div>
      </div>
    </div>
  );
};

export default Message;
