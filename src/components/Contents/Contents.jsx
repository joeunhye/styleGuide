import { useLocation } from "react-router-dom";
import { useDeviceMode } from "../../context/DeviceModeContext";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/esm/styles/hljs";
import styles from "./Contents.module.scss";
import classNames from "classnames/bind";
import { GoCopy } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
import { useRef, useState } from "react";

const cx = classNames.bind(styles);

const Contents = ({ content }) => {
	const { DeviceModeset } = useDeviceMode();
	const deviceStyle = cx(DeviceModeset);
	const location = useLocation();
	const [Copy, setCopy] = useState(false);
	const frameObj = useRef(null);
	const iframeName = location.pathname.split("/")[1];

	const [CodeHtml, setCodeHtml] = useState("");

	const codeString = `
    <div class="flex-group">
            <div class="col-group">
                <div class="" data-title="버튼">
                    <button type="button" class="btn btn--primary btn-l">버튼</button>
                    <button type="button" class="btn btn--secondaly btn-l">버튼</button>
                    <button type="button" class="btn btn--danger btn-l">버튼</button>
                    <button type="button" class="btn btn--danger btn-l" disabled>버튼</button>
                    <a href="" class="btn--link">링크버튼</a>
                </div>
            </div>
            <div class="col-group">
                <div class="" data-title="버튼 - full">
                    <button class="btn btn--primary btn-f">버튼</button>
                </div>
            </div>
        </div>
        <div class="flex-group">
            <div class="col-group">
                <div class="" data-title="버튼 - midium">
                    <button class="btn btn--primary btn-m">버튼</button>
                    <button class="btn btn--secondaly btn-m">버튼</button>
                    <button class="btn btn--danger btn-m">버튼</button>
                    <button class="btn btn-m" disabled>버튼</button>
                </div>
            </div>
            <div class="col-group">
                <div class="" data-title="버튼 - small">
                <button class="btn btn--primary btn-s">버튼</button>
                <button class="btn btn--secondaly btn-s">버튼</button>
                <button class="btn btn--danger btn-s">버튼</button>
                <button class="btn btn-s" disabled>버튼</button>
                </div>
            </div>
            <div class="col-group">
                <div class="" data-title="버튼 - half">
                    <div class="btn-group">
                        <button class="btn btn--primary">확인</button>
                        <button class="btn btn--secondaly">취소</button>
                    </div>
                </div>
            </div>
        </div>
        `;

	const hadleLoaded = () => {
		// console.log("iframe loaded");
		setCodeHtml(frameObj.current?.contentWindow.document.body.innerHTML);
	};

	// const iframeCont = () => {
	// 	const iframeUrl = `/html/${iframeName}.html`;
	// 	return {
	// 		__html: `<iframe src="${iframeUrl}" width="100%" height="600px" frameborder=0 framespacing=0 />`,
	// 	};
	// };

	if (content === "preview") {
		return (
			<div className={cx("preview", deviceStyle)}>
				<iframe src={`/html/${iframeName}.html`} width="100%" height="600px" ref={frameObj} onLoad={hadleLoaded} />
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
					<button className={cx("btn-copy")}>
						<IoMdCheckmark size={20} color="#159eca" />
					</button>
				)}
			</div>
			<SyntaxHighlighter language="javascript" style={atomOneDarkReasonable} customStyle={{ margin: "0px", padding: "0 10px", background: "#1c1d29", borderRadius: "0 0 10px 10px" }} wrapLongLines={true}>
				{CodeHtml}
			</SyntaxHighlighter>
		</div>
	);
};

export default Contents;

// https://www.youtube.com/watch?app=desktop&v=XxGMuoje1g0&ab_channel=CodeAProgram
// https://github.com/rajinwonderland/react-code-blocks?tab=readme-ov-file#supported-themes
// https://www.mozzlog.com/blog/react-syntax-highlighter-tutorial
// https://stackoverflow.com/questions/34743264/how-to-set-iframe-content-of-a-react-component
