

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FindSkills from "./pages/FindSkills";
import Login from "./pages/Login";
import Register from "./pages/register";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/find-skills" element={<FindSkills />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
