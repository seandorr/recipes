import { useCallback, useRef } from "react";
import type { DragEvent } from "react";

export const useWeekDrag = () => {
  const dragImageRef = useRef<HTMLElement | null>(null);

  const cleanupDragGhost = useCallback(() => {
    if (!dragImageRef.current) {
      return;
    }

    document.body.removeChild(dragImageRef.current);
    dragImageRef.current = null;
  }, []);

  const setDragImage = useCallback(
    (e: DragEvent<HTMLElement>) => {
      cleanupDragGhost();

      const card = e.currentTarget.cloneNode(true) as HTMLElement;
      const rect = e.currentTarget.getBoundingClientRect();

      card.style.position = "absolute";
      card.style.top = "-9999px";
      card.style.left = "-9999px";
      card.style.width = `${rect.width}px`;
      card.style.pointerEvents = "none";
      card.style.opacity = "1";

      document.body.appendChild(card);
      dragImageRef.current = card;

      e.dataTransfer.setDragImage(
        card,
        e.clientX - rect.left,
        e.clientY - rect.top,
      );

      e.dataTransfer.effectAllowed = "move";
    },
    [cleanupDragGhost],
  );

  return {
    cleanupDragGhost,
    setDragImage,
  };
};
