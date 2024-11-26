import { BrowserRouter, Route, Router, Routes } from "react-router-dom"
import Header from "./components/header/header.component"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App