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
  if (curIndex !== items.length - 1) {
    let curItems = [...items];
    //compare cur to next value (assuming not at the end)
    if (curItems[nextIndex].value < curItems[pointerIndex].value) {
      pointerIndex = nextIndex;
      setNextIndex(nextIndex + 1);
    }
    setCurIndex(curIndex + 1);
  } else {
    if (swapCount > 0) {
      setSwapCount(0);
    } else {
      setIsRunning(false);
      setSorted(true);
    }
    setCurIndex(0);
    setLoopCount(loopCount + 1);
  }
}
