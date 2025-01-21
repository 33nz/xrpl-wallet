import { BrowserRouter, Routes, Router } from 'react-router-dom'

import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Main from './pages/Main.js'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
