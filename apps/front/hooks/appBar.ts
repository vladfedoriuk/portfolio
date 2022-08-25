import { useState } from 'react';

export const useAppBar = () => {
	const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};
	return {
		anchorElNav,
		handleOpenNavMenu,
		handleCloseNavMenu,
	};
};
