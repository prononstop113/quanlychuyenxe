import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Footer from "./Components/Footer";
import User from "./Components/User";
import Bus from "./Components/Tables/Bus";
import Buses from "./Components/Tables/Buses";
import Driver from "./Components/Tables/Driver";
import Trip from "./Components/Tables/Trip";
import { useState } from "react";
import Pay from "./Components/Tables/Pay";
import Turnover from "./Components/Tables/Turnover";

function App() {

  const [toggleNav,setToggleNav] = useState({
    bus : false,
    buses : false,
    driver : false,
    route : false,
  })

  // const handleToggleRoute=()=>{
  //   setToggleNav({
  //     route : true,
  //   })
  // }

  // const handleToggleBus=()=>{
  //   setToggleNav({
  //     bus : true,
  //   })
  // }

  // const handleToggleBuses=()=>{
  //   setToggleNav({
  //     buses : true,
  //   })
  // }

  // const handleToggleDriver=()=>{
  //   setToggleNav({
  //     driver : true,
  //   })
  // }


  return (
    <BrowserRouter>
      <div>
        {/* Page Wrapper */}
        <div id="wrapper">
          {/* Sidebar */}
          <Navigation 
            toggleNav={toggleNav}
          />
          <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
              {/* Topbar */}
              <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/* Sidebar Toggle (Topbar) */}
                
                {/* Nav Item - User Information */}
                <User />
              </nav>
              {/* End of Topbar */}
              <Routes>
                <Route path="/user" element={<Pay/>}/>
                <Route path="/user/Pay" element={<Pay/>}/>
                {/* <Route path="tablesBus" element={<Bus/>}/>
                <Route path="tablesBuses" element={<Buses/>}/>
                <Route path="tablesDriver" element={<Driver/>}/> */}
                <Route path="/user/tablesBus" element={<Bus/>}/>
              </Routes>
            </div>
            {/* End of Main Content */}
            {/* Footer */}
            <Footer />
            {/* End of Footer */}
          </div>
        </div>
        {/* End of Page Wrapper */}
      </div>
    </BrowserRouter>
  );
}

export default App;
