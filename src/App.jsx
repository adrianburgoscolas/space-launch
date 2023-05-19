import { Routes, Route } from "react-router-dom";
import Launches from "./components/Launches";
import Details from "./components/Details";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Launches />}/>
        <Route path="/" element={<Launches />}/>
        <Route path=":id" element={<Details />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
