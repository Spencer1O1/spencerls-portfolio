import React from "react";
import "../Navbar.css";

interface Props {
	right?: boolean;
	left?: boolean;
	grow?: boolean;
}
export const NavSection = (props: React.PropsWithChildren<Props>) => {
	return (
		<div
			className={
				"nav-section" +
				(props?.right ? " right" : "") +
				(props?.left ? " left" : "")
			}
			style={{ flexGrow: props?.grow ? 1 : 0 }}
		>
			{props.children}
		</div>
	);
};
