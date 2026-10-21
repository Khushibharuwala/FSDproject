import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// We will add other pages later

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Other routes will be added later */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;