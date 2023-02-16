import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "./routes/Intro";
import Test from "./routes/Test";
import Result from "./routes/Result";
import Mbtis from "./routes/Mbtis";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 루트주소=/intro */}
        <Route path="/" element={<Intro />} />
        <Route path="/test" element={<Test />} />
        <Route path="/result/:mbti" element={<Result />} />
        <Route path="/mbtis" element={<Mbtis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


