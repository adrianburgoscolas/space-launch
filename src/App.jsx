import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Launches from "./components/Launches";
import Details from "./components/Details";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route index element={<Home />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/launches" element={<Launches />}/>
        <Route path="/details" element={<Details />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
