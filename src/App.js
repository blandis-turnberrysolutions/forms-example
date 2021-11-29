import "./App.css";
import EditPage from "./Edit/EditPage";
import PrintPage from "./Print/PrintPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<EditPage />} />
      <Route path="/print" element={<PrintPage />} />
    </Routes>
  );
}

export default App;
