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
const BASE_URL = import.meta.env.BASE_URL;

const router = createBrowserRouter([
	{
		path: BASE_URL,
		element: <Layout />,
		children: [
			{
				path: BASE_URL,
				element: <ReadMe />,
			},
			{
				path: `${BASE_URL}/buttons`,
				element: <Buttons />,
			},
			{
				path: `${BASE_URL}/text`,
				element: <Text />,
			},
			{
				path: `${BASE_URL}/input`,
				element: <Input />,
			},
			{
				path: `${BASE_URL}/form`,
				element: <Form />,
			},
			{
				path: `${BASE_URL}/checkboxradio`,
				element: <CheckBoxRadio />,
			},
			{
				path: `${BASE_URL}/switch`,
				element: <Switch />,
			},
			{
				path: `${BASE_URL}/tab`,
				element: <Tab />,
			},
			{
				path: `${BASE_URL}/table`,
				element: <Table />,
			},
			{
				path: `${BASE_URL}/boardList`,
				element: <BoardList />,
			},
			{
				path: `${BASE_URL}/pagination`,
				element: <Pagination />,
			},
			{
				path: `${BASE_URL}/popup`,
				element: <Popup />,
			},
			{
				path: `${BASE_URL}/accordion`,
				element: <Accordion />,
			},
			{
				path: `${BASE_URL}/dropdown`,
				element: <Dropdown />,
			},
			{
				path: `${BASE_URL}/zoom`,
				element: <Zoom />,
			},
			{
				path: `${BASE_URL}/topBtn`,
				element: <TopBtn />,
			},
			{
				path: `${BASE_URL}/thubnailList`,
				element: <ThubnailList />,
			},
			{
				path: `${BASE_URL}/listStyle`,
				element: <ListStyle />,
			},
			{
				path: `${BASE_URL}/search`,
				element: <Search />,
			},
			{
				path: `${BASE_URL}/icons`,
				element: <Icons />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<DarkModeProvider>
		<DeviceModeProvider>
			<App />
		</DeviceModeProvider>
	</DarkModeProvider>
);
