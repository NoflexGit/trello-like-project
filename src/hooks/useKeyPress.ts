import { useEffect } from "react";

const useKeypress = (key: string, action: () => void, isOpen: boolean) => {
  useEffect(() => {
    function onKeyup(e: KeyboardEvent) {
      if (e.key === key) action();
    }
    if (isOpen) {
      window.addEventListener("keydown", onKeyup);
    } else {
      window.removeEventListener("keydown", onKeyup);
    }

    return () => window.removeEventListener("keydown", onKeyup);
  }, [key, action, isOpen]);
};

export default useKeypress;
