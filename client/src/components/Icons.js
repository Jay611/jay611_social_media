import React from "react";

const Icons = ({ content, setContent, theme }) => {
  const reactions = [
    "❤️",
    "😆",
    "😯",
    "😢",
    "😡",
    "👍",
    "👎",
    "😄",
    "😂",
    "😍",
    "😘",
    "😗",
    "😚",
    "😳",
    "😭",
    "😓",
    "😤",
    "🤤",
    "👻",
    "💀",
    "🤐",
    "😴",
    "😷",
    "😵",
  ];

  return (
    <div
      className="dropup"
      style={{ opacity: 1, filter: theme ? "invert(1)" : "invert(0)" }}
    >
      <span
        data-bs-toggle="dropdown"
        data-bs-display="static"
        aria-expanded="false"
      >
        <span style={{ opacity: 0.4 }}>😄</span>
      </span>
      <div className="dropdown-menu dropdown-menu-end">
        <div className="reactions">
          {reactions.map((icon) => (
            <span key={icon} onClick={() => setContent(content + icon)}>
              {icon}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Icons;
