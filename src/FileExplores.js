import React, { useState } from "react";
import myData from "./source.json";

const RenderItem = ({ item, level = 0 }) => {
  const [isopen, setOpen] = useState(false);
  if (item.type === "file")
    return (
      <div style={{ marginLeft: level * 20 }} className="file">
        🗎{item.name}
      </div>
    );
  const handleOnClick = () => {
    setOpen(!isopen);
  };
  return (
    <div>
      <div
        style={{ marginLeft: level * 20, cursor: "pointer" }}
        onClick={handleOnClick}
      >
        📁{item.name}
      </div>
      {isopen &&
        item.children.map((child, childIndex) => {
          return <RenderItem key={childIndex} item={child} level={level + 1} />;
        })}
    </div>
  );
};

const FileExplorer = () => {
  return (
    <div style={{ textAlign: "left", padding: "10px" }}>
      <h3>File Explorer</h3>
      <RenderItem item={myData} />
    </div>
  );
};

export default FileExplorer;
