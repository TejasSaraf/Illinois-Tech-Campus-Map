import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GoogleMap from './components/GoogleMap';
import LifeOnCampus from "./pages/LifeOnCampus.jsx";
import ParkingTransportation from "./pages/Parking&Transportation.jsx";
import Safety from "./pages/Safety&Security.jsx";
import VisitingCampus from "./pages/VisitingCampus.jsx";
import SideBar from './components/Sidebar.jsx';

function App() {
  return (
    <Router>
      <div className="main-container">
        <SideBar />
        <main className="content">
          <Routes>
            <Route path="/" element={<GoogleMap />} />
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


