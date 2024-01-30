import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import ReadMe from './page/ReadMe/ReadMe'
import Buttons from './page/Buttons/Buttons';
import Text from './page/Text/Text';
import Input from './page/Input/Input';
import Form from './page/Form/Form';
import CheckBoxRadio from './page/CheckBoxRadio/CheckBoxRadio';
import Switch from './page/Switch/Switch';

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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
