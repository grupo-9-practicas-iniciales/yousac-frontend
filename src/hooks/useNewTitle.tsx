import { useEffect } from "react";

export const useNewTitle = (newTitle: string | undefined) => {
  if (!newTitle) {
    return;
  }
  useEffect(() => {
    document.title = `YOUSAC App | ${newTitle}`;
  }, [newTitle]);

  return null;
};
