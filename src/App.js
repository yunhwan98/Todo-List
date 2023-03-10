import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import ReadAll from "./pages/ReadAll";

function App() {
  return (
    //경로 설정
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/readall" element={<ReadAll />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
