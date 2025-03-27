import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Genders from "./pages/gender/Genders";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Genders />} />
      </Routes>
    </Router>
  );
};

export default App;
