import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Contato } from "./pages/Contato"


function App(){

  return(
    <>
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<></>} />
            <Route patch="/contato" element={<Contato />}/>
          </Routes>
        <Footer />
      </Router>
    </>

  )

}

export default App