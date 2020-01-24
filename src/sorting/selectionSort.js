export default function selectionSort({
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
  //-2 becuase we're comparing with the element in front of cur
  if (nextIndex !== items.length) {
    let curItems = [...items];

    //compare cur to next value (assuming not at the end)
    if (curItems[nextIndex].value < curItems[pointerIndex].value) {
      setPointerIndex(nextIndex);
    }
    setNextIndex(nextIndex + 1);
  } else {
    //Reached the end - about to do last swap
    if (curIndex !== items.length - 1) {
      //not sorted
      setItems(swap(curIndex, pointerIndex, items));
      setSwapCount(0);
      setPointerIndex(curIndex + 1);
      setCurIndex(curIndex + 1);
      setNextIndex(curIndex + 2);
    } else {
      //sorted, so end it
      setIsRunning(false);
      setSorted(true);
      setCurIndex(0);
    }
    setLoopCount(loopCount + 1);
  }
}
