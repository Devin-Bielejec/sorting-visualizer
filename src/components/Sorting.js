import React, { useState } from "react";
import Item from "./Item";
import useInterval from "../hooks/useInterval";
import bubbleSort from "../sorting/bubbleSort";
import selectionSort from "../sorting/selectionSort";
import sortNames from "../sorting/index";

function randomArray(length) {
  let result = [];
  for (let i = 0; i < length; i++) {
    result.push({
      value: Math.floor(Math.random() * length * 10),
      bg: "white"
    });
  }
  return result;
}
function swap(index1, index2, array) {
  let newArray = [...array];
  // swap values
  [newArray[index1], newArray[index2]] = [newArray[index2], newArray[index1]];
  return newArray;
}

export default function Sorting() {
  const [items, setItems] = useState(randomArray(25));
  const [isRunning, setIsRunning] = useState(false);
  const [curIndex, setCurIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [pointerIndex, setPointerIndex] = useState(0);
  const [swapCount, setSwapCount] = useState(0);
  const [loopCount, setLoopCount] = useState(0);
  const [sorted, setSorted] = useState(false);
  const [currentSort, setCurrentSort] = useState(sortNames[0]);

  const reset = () => {
    setSorted(false);
    setItems(randomArray(25));
    setCurIndex(0);
    setSwapCount(0);
    setLoopCount(0);
    setPointerIndex(0);
    setNextIndex(curIndex + 1);
  };

  const toggleAnimation = () => {
    setIsRunning(!isRunning);
    if (isRunning) {
      reset();
    }

    //Starts with the first two items being selected
  };

  const changeSort = e => {
    reset();
    setCurrentSort(e.target.value);
  };

  useInterval(
    () => {
      let informationForSorting = {
        curIndex,
        loopCount,
        items,
        swapCount,
        setItems,
        setSwapCount,
        setCurIndex,
        setIsRunning,
        setSorted,
        setLoopCount,
        swap,
        nextIndex,
        setNextIndex,
        pointerIndex,
        setPointerIndex
      };

      if (currentSort === "Bubble Sort") {
        bubbleSort(informationForSorting);
      } else if (currentSort === "Selection Sort") {
        selectionSort(informationForSorting);
      }
    },
    isRunning ? 25 : null
  );
  return (
    <div>
      <h1>Sorting Viz</h1>
      {!sorted && (
        <button onClick={toggleAnimation}>
          {isRunning ? "Stop" : "Start"}
        </button>
      )}
      {sorted && <button onClick={reset}>Generate new array</button>}
      <select onChange={changeSort}>
        {sortNames.map(name => (
          <option value={name}>{name}</option>
        ))}
      </select>
      <div className="container">
        {items.map((item, i) => {
          return (
            <Item
              item={item}
              key={i}
              i={i}
              curIndex={curIndex}
              nextIndex={nextIndex}
              currentSort={currentSort}
              maxValue={items.length * 10}
            />
          );
        })}
      </div>
    </div>
  );
}
