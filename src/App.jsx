import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import ReadMe from './page/ReadMe/ReadMe'
import Buttons from './page/Buttons/Buttons';
import Text from './page/Text/Text';
import Input from './page/Input/Input';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ReadMe />} />
          <Route path='/buttons' element={<Buttons />} />
          <Route path='/text' element={<Text />} />
          <Route path='/input' element={<Input />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
