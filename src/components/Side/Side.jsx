import { NavLink } from "react-router-dom";
import styles from "./Side.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Side = () => {
	return (
		<nav className={cx("side")}>
			<NavLink to="/styleGuide/">📌 Read Me</NavLink>
			<NavLink to="/styleGuide/buttons">Buttons</NavLink>
			<NavLink to="/styleGuide/text">Text</NavLink>
			<NavLink to="/styleGuide/input">Input</NavLink>
			<NavLink to="/styleGuide/form">Form</NavLink>
			<NavLink to="/styleGuide/checkboxradio">CheckBox & Radio</NavLink>
			<NavLink to="/styleGuide/search">Search</NavLink>
			<NavLink to="/styleGuide/switch">Switch</NavLink>
			<NavLink to="/styleGuide/tab">Tab</NavLink>
			<NavLink to="/styleGuide/table">Table</NavLink>
			<NavLink to="/styleGuide/boardList">Board List</NavLink>
			<NavLink to="/styleGuide/pagination">Pagination</NavLink>
			<NavLink to="/styleGuide/popup">Popup</NavLink>
			<NavLink to="/styleGuide/accordion">Accordion</NavLink>
			<NavLink to="/styleGuide/dropdown">Dropdown</NavLink>
			<NavLink to="/styleGuide/zoom">Zoom</NavLink>
			<NavLink to="/styleGuide/topBtn">Top Button</NavLink>
			<NavLink to="/styleGuide/thubnailList">Thubnail List</NavLink>
			<NavLink to="/styleGuide/listStyle">List Style</NavLink>
			<NavLink to="/styleGuide/icons">Icons</NavLink>
		</nav>
	);
};

export default Side;
