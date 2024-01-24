import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import ReadMe from './page/ReadMe/ReadMe'
import Buttons from './page/Buttons/Buttons';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ReadMe />} />
          <Route path='/buttons' element={<Buttons />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
