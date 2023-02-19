import { useState } from "react";
import { Routes, Route, Link, BrowserRouter, HashRouter } from "react-router-dom";

function App() {

  const [count, setCount] = useState(0);

  return (
    <HashRouter>
      <Link to="/">Trang chủ</Link> <br />
      <Link to="/contact">Liên hệ</Link><br />
      <Link to="/about">Giới thiệu</Link><br />


      <Routes>
        <Route path="/" element={<h1>Đây là trang chủ</h1>} />
        <Route path="/contact" element={<h1>Đây là liên hệ</h1>} />
        <Route path="/about" element={<h1>Đây là trang giới thiệu</h1>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
