import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GoogleMap from './components/GoogleMap';
import LifeOnCampus from "./pages/LifeOnCampus";
import ParkingTransportation from "./pages/Parking&Transportation";
import Safety from "./pages/Safety&Security";
import VisitingCampus from "./pages/VisitingCampus";
import SideBar from './components/Sidebar';
import Navbar from './components/Navbar/Navbar';
import { useState } from 'react';

function App() {
  const [markers, setMarkers] = useState([]);

  return (
    <Router>
      <div className='container'>
        <Navbar />
      </div>

      <div className="main-container">
        <SideBar setMarkers={setMarkers} />
        <main className="content">
          <Routes>
            <Route path="/" element={<GoogleMap additionalMarkers={markers} />} />
            <Route path="/LifeOnCampus" element={<LifeOnCampus />} />
            <Route path="/ParkingTransportation" element={<ParkingTransportation />} />
            <Route path="/Safety" element={<Safety />} />
            <Route path="/VisitingCampus" element={<VisitingCampus />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
