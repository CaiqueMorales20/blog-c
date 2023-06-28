// Types
export type HeaderContextProps = {
	openedMenu: boolean;
	setOpenedMenu: (prev: boolean) => void;
	search: string;
	setSearch: (prev: string) => void;
};

export type InputProps = {
	// Attrs
	placeholder: string;
};
