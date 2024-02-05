import { useLocation } from "react-router-dom";
import { useDeviceMode } from "../../context/DeviceModeContext";
import styles from "./Contents.module.scss";
import classNames from "classnames/bind";
import { GoCopy } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
import { useRef, useState } from "react";
import CodeSnippet from "./CodeSnippet";

const cx = classNames.bind(styles);

const Contents = ({ content }) => {
	const { DeviceModeset } = useDeviceMode();
	const deviceStyle = cx(DeviceModeset);
	const location = useLocation();
	const [Copy, setCopy] = useState(false);
	const frameObj = useRef(null);
	const iframeName = location.pathname.split("/")[1];
	const BASE_URL = import.meta.env.BASE_URL;

	const [CodeHtml, setCodeHtml] = useState("");

	const hadleLoaded = () => {
		setCodeHtml(frameObj.current?.contentWindow.document.body.innerHTML);
	};

	// const iframeCont = () => {
	//     const iframeUrl = `/html/${iframeName}.html`;
	//     return {
	//         __html:
	//         `<iframe src="${iframeUrl}" width="100%" height="600px" frameborder=0 framespacing=0 />`
	//     }
	// }

	if (content === "preview") {
		return (
			<div className={cx("preview", deviceStyle)}>
				{/* <div dangerouslySetInnerHTML={iframeCont()} /> */}
				<iframe src={`${BASE_URL}/html/${iframeName}.html`} width="100%" height="650" ref={frameObj} onLoad={hadleLoaded} />
			</div>
		);
	}
	return (
		<div className={cx("code", deviceStyle)}>
			<div className={cx("code-title")}>
				<p>HTML</p>
				{!Copy ? (
					<button
						className={cx("btn-copy")}
						onClick={() => {
							navigator.clipboard.writeText(CodeHtml);
							setCopy(true);
							setTimeout(() => {
								setCopy(false);
							}, 1000);
						}}
					>
						<GoCopy size={20} />
					</button>
				) : (
					<>
						<button className={cx("btn-copy")}>
							<IoMdCheckmark size={20} color="#159eca" />
						</button>
						<div className={cx("speech-bubble")}>Copied 😀</div>
					</>
				)}
			</div>
			<CodeSnippet language="html" code={CodeHtml} />
		</div>
	);
};

export default Contents;
