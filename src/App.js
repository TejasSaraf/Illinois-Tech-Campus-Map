import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GoogleMap from "./components/GoogleMap";
import LifeOnCampus from "./pages/LifeOnCampus";
import ParkingTransportation from "./pages/Parking&Transportation";
import Safety from "./pages/Safety&Security";
import VisitingCampus from "./pages/VisitingCampus";
import SideBar from "./components/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [markers, setMarkers] = useState([]);

  return (
    <Router>
      <Navbar />
      <div className="main-container">
        <Routes>
          <Route
            path="/"
            element={
              <div className="content">
                <div className="sidebar-container">
                  <SideBar setMarkers={setMarkers} />
                </div>
                <div className="google-map-container">
                  <GoogleMap additionalMarkers={markers} />
                </div>
              </div>
            }
          />
          <Route path="/LifeOnCampus" element={<LifeOnCampus />} />
          <Route path="/ParkingTransportation" element={<ParkingTransportation />} />
          <Route path="/Safety" element={<Safety />} />
          <Route path="/VisitingCampus" element={<VisitingCampus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
