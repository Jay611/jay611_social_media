import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../Avatar";
import { GLOBALTYPES } from "../../redux/actions/globalTypes";

const CallModal = () => {
  const { call } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [mins, setMins] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [total, setTotal] = useState(0);
  const [answer, setAnswer] = useState(false);

  useEffect(() => {
    const setTime = () => {
      setTotal((t) => t + 1);
      setTimeout(setTime, 1000);
    };
    setTime();
    return () => setTotal(0);
  }, []);

  useEffect(() => {
    setSeconds(total % 60);
    setMins(parseInt(total / 60));
  }, [total]);

  // End Call
  const handleEndCall = () => {
    dispatch({ type: GLOBALTYPES.CALL, payload: null });
  };

  useEffect(() => {
    if (answer) {
      setTotal(0);
    } else {
      const timer = setTimeout(() => {
        dispatch({ type: GLOBALTYPES.CALL, payload: null });
      }, 15000);
      return () => clearTimeout(timer);
    }
  }, [dispatch, answer]);

  // Answer Call
  const handleAnswer = () => {
    setAnswer(true);
  };

  return (
    <div className="call_modal">
      <div className="call_box">
        <div className="text-center py-4">
          <Avatar src={call.avatar} size="super-avatar" />
          <h4>{call.username}</h4>
          <h6>{call.fullname}</h6>

          <div>
            {call.video ? (
              <span>Calling video...</span>
            ) : (
              <span>Calling audio...</span>
            )}
          </div>
        </div>

        <div className="timer">
          <small>{mins.toString().length < 2 ? "0" + mins : mins}</small>
          <small>:</small>
          <small>
            {seconds.toString().length < 2 ? "0" + seconds : seconds}
          </small>
        </div>

        <div className="call_menu">
          <span className="material-icons text-danger" onClick={handleEndCall}>
            call_end
          </span>

          <>
            {call.video ? (
              <span
                className="material-icons text-success"
                onClick={handleAnswer}
              >
                videocam
              </span>
            ) : (
              <span className="material-icons text-success">call</span>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default CallModal;
