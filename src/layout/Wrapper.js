import React from "react";
import copy from "clipboard-copy";
import { MdContentCopy } from "react-icons/md";

const Wrapper = ({ children }) => {
  const handleCopyClick = () => {
    const codeToCopy = children.props.children;
    copy(codeToCopy);
    alert("Copied");
  };    

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        gap: "2px",
      }}
    >
      {React.cloneElement(children)}
      <button
        style={{
          height: "50px",
          width: "40px",
        }}
        title="Copy"
        onClick={handleCopyClick}
      >
        <MdContentCopy />
      </button>
    </div>
  );
};

export default Wrapper;
