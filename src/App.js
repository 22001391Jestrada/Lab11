import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Metroville from "./components/metroville.jsx";
import RiverCity from "./components/riverCity.jsx";
import CoastalTown from "./components/coastalTown.jsx";
import Home from "./components/home.jsx";
import Navbar from "./components/customNavbar.jsx"
import {Metroville_desc, RiverCity_desc, CoastalTown_desc} from "./components/descriptions.jsx"

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/metroville" element={<Metroville />}>
              <Route path="M_desc" element={<Metroville_desc/>}/>
            </Route>
            <Route path="/rivercity" element={<RiverCity />}>
              <Route path="R_desc" element={<RiverCity_desc/>}/>
            </Route>
            <Route path="/coastaltown" element={<CoastalTown />}>
              <Route path="C_desc" element={<CoastalTown_desc/>}/>
            </Route>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
