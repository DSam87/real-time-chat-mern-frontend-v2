import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage/HomePage";
import Dashboard from "./components/Dash/Dashboard";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
    </Routes>
  );
}

export default App;
