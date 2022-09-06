import { useState } from "react";

export const useMenu = () => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElement(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElement(null);
  };
  return {
    anchorElement,
    handleOpenMenu,
    handleCloseMenu,
  };
};
