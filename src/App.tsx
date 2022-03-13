import { BrowserRouter, Routes, Route } from "react-router-dom"

// compo
import Home from "./components/Home"

// main app
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
