import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Homepage/HomePage";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import Dashboard from "./components/Dash/Dashboard";
import UserPage from "./features/user/UserPage";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/user">
        <Route path=":id" element={<UserPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
