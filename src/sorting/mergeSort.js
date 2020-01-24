function merge(left, right, curIndex, items) {
  let results = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  results = [...results, ...left, ...right];

  //have the correct merged items and need to update them in the real items
  let newItems = [...items];
  newItems.splice(curIndex, results.length, ...results);
  return newItems;
}

export default function mergeSort({
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
}) {
  console.log(loopCount);
  console.log(loopCount !== items.length);
  if (loopCount !== Math.floor(items.length / 2)) {
    //figure out left and right
    let left = items.slice(curIndex, curIndex + loopCount + 1);
    let right = items.slice(nextIndex, nextIndex + loopCount + 1);
    //merge them and set results to new items
    setItems(merge(left, right, curIndex, items));

    if (loopCount + 1 === Math.floor(items.length / 2) - 1) {
      //go right
      setCurIndex(Math.ceil(items.length / 2));
      setNextIndex(Math.ceil(items.length / 2) + 1);
    }
    setLoopCount(loopCount + 1);
  } else {
    //sorted, so end it
    setIsRunning(false);
    setSorted(true);
    setCurIndex(0);
  }
}
