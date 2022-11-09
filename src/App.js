import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Add from "./Components/Add";
import Edit from "./Components/Edit";
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit" element={<Edit />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
