import { useRef, useState } from "react";
import styles from "./ContTab.module.scss";
import classNames from "classnames/bind";
import Contents from "../Contents/Contents";
import { useLocation } from "react-router-dom";

const cx = classNames.bind(styles);

const ContTab = () => {
	const [currentTab, setCurrentTab] = useState("preview");
	// const location = useLocation();
	// const frameObj = useRef(null);
	// const iframeName = location.pathname.split('/')[1];

	return (
		<div className={cx("contTab")}>
			<div className={cx("tabBtn")}>
				<button className={cx(currentTab === "preview" && "on")} onClick={() => setCurrentTab("preview")}>
					preview
				</button>
				<button className={cx(currentTab === "code" && "on")} onClick={() => setCurrentTab("code")}>
					code
				</button>
			</div>

			<Contents content={currentTab} />
		</div>
	);
};

export default ContTab;
