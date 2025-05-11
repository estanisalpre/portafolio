import { Routes, Route } from 'react-router-dom'
import HomeView from './modules/landing/view/HomeView'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeView/>} />
    </Routes>
  )
}

export default App
