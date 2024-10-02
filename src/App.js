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
      <div className="main-container">
        <SideBar setMarkers={setMarkers} />
        <main className="content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <GoogleMap additionalMarkers={markers} />
                </>
              }
            />
            <Route
              path="/LifeOnCampus"
              element={
                <>
                  <Navbar />
                  <LifeOnCampus />
                </>
              }
            />
            <Route
              path="/ParkingTransportation"
              element={
                <>
                  <Navbar />
                  <ParkingTransportation />
                </>
              }
            />
            <Route
              path="/Safety"
              element={
                <>
                  <Navbar />
                  <Safety />
                </>
              }
            />
            <Route
              path="/VisitingCampus"
              element={
                <>
                  <Navbar />
                  <VisitingCampus />
                </>
              }
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
