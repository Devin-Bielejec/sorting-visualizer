import React from "react";

export default function Item({
  item,
  i,
  curIndex,
  maxValue,
  nextIndex,
  currentSort
}) {
  let currentColor;
  if (curIndex === i) {
    currentColor = "yellow";
  } else if (nextIndex === i && currentSort === "Selection Sort") {
    currentColor = "green";
  } else {
    currentColor = "white";
  }
  return (
    <div
      className={`item ${currentColor}`}
      style={{ height: `${(item.value / maxValue) * 100}%` }}
      key={i}
    >
      {/* {item.value} */}
    </div>
  );
}
