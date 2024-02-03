import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./global.scss";
import { DarkModeProvider } from "./context/DarkModeContext";
import { DeviceModeProvider } from "./context/DeviceModeContext.jsx";
import Layout from "./components/Layout/Layout";
import ReadMe from "./page/ReadMe/ReadMe";
import Buttons from "./page/Buttons/Buttons";
import Text from "./page/Text/Text";
import Input from "./page/Input/Input";
import Form from "./page/Form/Form";
import CheckBoxRadio from "./page/CheckBoxRadio/CheckBoxRadio";
import Switch from "./page/Switch/Switch";
import Tab from "./page/Tab/Tab";
import Table from "./page/Table/Table";
import BoardList from "./page/BoardList/BoardList";
import Pagination from "./page/Pagination/Pagination";
import Popup from "./page/Popup/Popup";
import Accordion from "./page/Accordion/Accordion";
import Dropdown from "./page/Dropdown/Dropdown";
import Zoom from "./page/Zoom/Zoom";
import TopBtn from "./page/TopBtn/TopBtn";
import ThubnailList from "./page/ThubnailList/ThubnailList";
import ListStyle from "./page/ListStyle/ListStyle";
import Search from "./page/Search/Search";
import Icons from "./page/Icons/Icons";

const router = createBrowserRouter([
	{
		path: "/styleGuide/",
		element: <Layout />,
		children: [
			{
				path: "/styleGuide/",
				element: <ReadMe />,
			},
			{
				path: "/styleGuide/buttons",
				element: <Buttons />,
			},
			{
				path: "/styleGuide/text",
				element: <Text />,
			},
			{
				path: "/styleGuide/input",
				element: <Input />,
			},
			{
				path: "/styleGuide/form",
				element: <Form />,
			},
			{
				path: "/styleGuide/checkboxradio",
				element: <CheckBoxRadio />,
			},
			{
				path: "/styleGuide/switch",
				element: <Switch />,
			},
			{
				path: "/styleGuide/tab",
				element: <Tab />,
			},
			{
				path: "/styleGuide/table",
				element: <Table />,
			},
			{
				path: "/styleGuide/boardList",
				element: <BoardList />,
			},
			{
				path: "/styleGuide/pagination",
				element: <Pagination />,
			},
			{
				path: "/styleGuide/popup",
				element: <Popup />,
			},
			{
				path: "/styleGuide/accordion",
				element: <Accordion />,
			},
			{
				path: "/styleGuide/dropdown",
				element: <Dropdown />,
			},
			{
				path: "/styleGuide/zoom",
				element: <Zoom />,
			},
			{
				path: "/styleGuide/topBtn",
				element: <TopBtn />,
			},
			{
				path: "/styleGuide/thubnailList",
				element: <ThubnailList />,
			},
			{
				path: "/styleGuide/listStyle",
				element: <ListStyle />,
			},
			{
				path: "/styleGuide/search",
				element: <Search />,
			},
			{
				path: "/styleGuide/icons",
				element: <Icons />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<DarkModeProvider>
		<DeviceModeProvider>
			<RouterProvider router={router} />
		</DeviceModeProvider>
	</DarkModeProvider>
);
