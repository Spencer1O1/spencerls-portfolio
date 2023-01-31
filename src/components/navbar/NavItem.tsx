import React from "react";
import "../Navbar.css";

interface Props {}
export const NavItem = (props: React.PropsWithChildren<Props>) => {
	return <div className="nav-item">{props.children}</div>;
};
