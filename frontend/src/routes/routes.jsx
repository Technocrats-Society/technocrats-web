import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Events from "../components/Events";
import Blogs from "../components/Blogs";
import Vision from "../components/Vision";
import FeatureSection from "../components/FeatureSection";

const AppRoutes = () => {
  return (
    <Router basename="/technocrats-web">
      <Routes>
        <Route path="/technocrats-web/" element={<Home />} />
        <Route path="/technocrats-web/features" element={<FeatureSection />} />
        <Route path="/technocrats-web/events" element={<Events />} />
        <Route path="/technocrats-web/blogs" element={<Blogs />} />
        <Route path="/technocrats-web/vision" element={<Vision />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
