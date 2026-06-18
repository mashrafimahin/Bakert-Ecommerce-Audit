// dependencies
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../app/store/index.ts";
// interface/@types

// main
const useSlices = <K extends keyof RootState>(sliceName: K) => {
  const data = useSelector((state: RootState) => state[sliceName]);
  const dispatch = useDispatch<AppDispatch>();

  return { data, dispatch } as { data: RootState[K]; dispatch: AppDispatch };
};

// exports
export default useSlices;
