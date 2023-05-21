import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/page/:pageId" element={<HomePage />}></Route>
          <Route path="/post/:postId" element={<DetailPage />}></Route>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
