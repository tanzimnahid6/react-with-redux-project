import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Header from "./components/Header/Header"

import Footer from "./components/footer/footer"
import Video from "./Pages/Video"

const App = () => {
  return (
    <div className="max-w-screen-2xl mx-auto  ">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/videos/1" element={<Video />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
