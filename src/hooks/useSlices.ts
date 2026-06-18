// dependencies
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../app/store/index.ts";
// interface/@types

// main
const useSlices = (sliceName: keyof RootState) => {
  const data = useSelector((state: RootState) => state[sliceName]);
  const dispatch = useDispatch<AppDispatch>();

  return { data, dispatch };
};

// exports
export default useSlices;
