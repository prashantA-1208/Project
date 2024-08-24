import {Routes,Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Auth/Register";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/policy" element={<PrivacyPolicy/>} />
      <Route path="*" element={<PageNotFound/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
    
    </>
  );
}

export default App;
