import { useEffect, type RefObject } from "react";

export const useEscapePress = (
  ref: RefObject<HTMLElement | null>,
  callback: () => void,
  condition: boolean = true,
) => {
  useEffect(() => {
    if (!condition) return;

    const handleEscapePress = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        callback();
      }
    };

    document.addEventListener("keydown", handleEscapePress);
    return () => document.removeEventListener("keydown", handleEscapePress);
  }, [ref, callback, condition]);
};
