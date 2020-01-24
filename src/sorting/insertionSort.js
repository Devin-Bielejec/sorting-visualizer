function insert(indexToRemove, indexToAdd, array) {
  let newArray = [...array];
  let value = newArray.splice(indexToRemove, 1);
  newArray.splice(indexToAdd, 0, value[0]);
  return newArray;
}

export default function insertionSort({
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
  if (curIndex === 0 && pointerIndex === 0) {
    setCurIndex(curIndex + 1);
  } else if (swapCount === 0) {
    let curItems = [...items];
    //first part - algo for most of array
    //second part - if at beginning and items are out of order, swap them
    if (
      pointerIndex === -1 ||
      curItems[pointerIndex].value < curItems[curIndex].value
    ) {
      //insert via slice inserts before the currentIndex
      setItems(insert(curIndex, pointerIndex + 1, curItems));
      setSwapCount(swapCount + 1);
    } else {
      setPointerIndex(pointerIndex - 1);
    }
  } else {
    //Reached the end - about to do last swap
    if (curIndex !== items.length - 1) {
      //not sorted
      setSwapCount(0);
      setPointerIndex(curIndex);
      setCurIndex(curIndex + 1);
    } else {
      //sorted, so end it
      setIsRunning(false);
      setSorted(true);
      setCurIndex(0);
    }
    setLoopCount(loopCount + 1);
  }
}
