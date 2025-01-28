import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Main from './pages/Main.js'
import ManageAccount from './pages/ManageAccount.js'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/manage-account" element={<ManageAccount />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
