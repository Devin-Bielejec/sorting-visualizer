import React from "react";

export default function Item({
  item,
  i,
  curIndex,
  maxValue,
  nextIndex,
  pointerIndex,
  currentSort
}) {
  let currentColor;
  if (currentSort === "Insertion Sort") {
    if (i === curIndex) {
      currentColor = "yellow";
    } else if (i === pointerIndex) {
      currentColor = "red";
    } else {
      currentColor = "white";
    }
  }

  if (currentSort === "Bubble Sort") {
    if (i === curIndex) {
      currentColor = "yellow";
    } else {
      currentColor = "white";
    }
  }

  if (currentSort === "Selection Sort") {
    if (i === curIndex) {
      currentColor = "yellow";
    } else if (i === nextIndex) {
      currentColor = "green";
    } else {
      currentColor = "white";
    }
  }

  return (
    <div
      className={`item ${currentColor}`}
      style={{ height: `${(item.value / maxValue) * 100}%` }}
      key={i}
    ></div>
  );
}
