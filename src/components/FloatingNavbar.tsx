import React from "react";
import "./Navbar.css";

interface Props {}
export const FloatingNavbar = (props: React.PropsWithChildren<Props>) => {
	return <div className="floating-navbar">{props.children}</div>;
};
