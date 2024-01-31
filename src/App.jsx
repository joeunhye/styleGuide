import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import ReadMe from './page/ReadMe/ReadMe'
import Buttons from './page/Buttons/Buttons';
import Text from './page/Text/Text';
import Input from './page/Input/Input';
import Form from './page/Form/Form';
import CheckBoxRadio from './page/CheckBoxRadio/CheckBoxRadio';
import Switch from './page/Switch/Switch';
import Tab from './page/Tab/Tab';
import Table from './page/Table/Table';
import Pagination from './page/Pagination/Pagination';
import Popup from './page/Popup/Popup';
import Accordion from './page/Accordion/Accordion';
import Dropdown from './page/Dropdown/Dropdown';
import Zoom from './page/Zoom/Zoom';
import TopBtn from './page/TopBtn/TopBtn';
import ThubnailList from './page/ThubnailList/ThubnailList';
import ListStyle from './page/ListStyle/ListStyle';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ReadMe />} />
          <Route path='/buttons' element={<Buttons />} />
          <Route path='/text' element={<Text />} />
          <Route path='/input' element={<Input />} />
          <Route path='/form' element={<Form />} />
          <Route path='/checkboxradio' element={<CheckBoxRadio />} />
          <Route path='/switch' element={<Switch />} />
          <Route path='/tab' element={<Tab />} />
          <Route path='/table' element={<Table />} />
          <Route path='/pagination' element={<Pagination />} />
          <Route path='/popup' element={<Popup />} />
          <Route path='/accordion' element={<Accordion />} />
          <Route path='/dropdown' element={<Dropdown />} />
          <Route path='/zoom' element={<Zoom />} />
          <Route path='/topBtn' element={<TopBtn />} />
          <Route path='/thubnailList' element={<ThubnailList />} />
          <Route path='/listStyle' element={<ListStyle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
