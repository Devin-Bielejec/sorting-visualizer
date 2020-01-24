export default function bubbleSort({
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
  swap
}) {
  if (curIndex !== items.length - 1 - loopCount) {
    let curIndexs = [...items];
    //compare cur to next value (assuming not at the end)
    if (curIndexs[curIndex].value > curIndexs[curIndex + 1].value) {
      setItems(swap(curIndex, curIndex + 1, curIndexs));
      setSwapCount(swapCount + 1);
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
