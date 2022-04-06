import { RefObject, useEffect } from "react";

const useOnClickOutside = (ref: RefObject<any> | null, cb: Function) => {
  if (!ref) {
    throw new Error("useOnClickOutside must has a ref");
  }

  useEffect(() => {
    const listener = (e: any) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      cb(e);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, cb]);
};

export default useOnClickOutside;
