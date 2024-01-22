import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Side from './components/Side/Side';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Layout />} /> */}
        <Header />
        <Side />
        <Footer />
      </Routes>
    </BrowserRouter>
  )
}

export default App
https://dev.to/rebeccapeltz/react-18-react-router-v6-sidebar-navigation-and-a-sandpack-component-5c02