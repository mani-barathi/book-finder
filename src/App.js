import { Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404";
import Home from "./containers/home/HomePage";
import SingleBook from "./containers/singlebook/SingleBookPage";
import Test from "./containers/TestPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book/:slug" element={<SingleBook />} />
      <Route path="/test" element={<Test />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default App;
