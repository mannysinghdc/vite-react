import { Routes, Route } from "react-router-dom";
import Read from "./Component/Read";
import Create from "./Component/Create"
import Update from "./Component/Update";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Create />} />
        <Route exact path="/read" element={<Read />} />
        <Route exact path="/update" element={<Update />} />
      </Routes>

    </>
  )
}

export default App
