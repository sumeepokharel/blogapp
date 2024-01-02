import { Routes, Route } from "react-router-dom";
import Photos from "./pages/Photos";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/about" element={<About />} />
        <Route path="/Posts" element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
