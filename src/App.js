/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "./config/axiosInit";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import Navigation from "./components/layout/Navigations";
import Home from "./components/views/Home/Home.jsx";
import Error404 from "./components/views/error404/Error404.jsx";
import ServicesTable from "./components/views/serviceTable/ServicesTable.jsx";
import ServiceCreate from "./components/views/serviceCreate/ServiceCreate.jsx";
import ServiceEdit from "./components/views/serviceEdit/ServiceEdit.jsx";
import ServiceDetails from "./components/views/serviceDetails/ServiceDetails.jsx";
import Login from "./components/views/login/Login.jsx";
import Register from "./components/views/register/register.jsx";
import Footer from "./components/layout/Footer";

function App() {
  const [services, setServices] = useState([]);
  const [loggedUser, setLoggedUser] = useState([]);
  const URL = process.env.REACT_APP_Apex_Gym_servies;

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    try {
      const res = await axios.get(URL);
      setServices(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BrowserRouter>
      <Navigation loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
      <main>
        <Routes>
          <Route exact path="/" element={<Home services={services} />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Routes>
                  <Route
                    exact
                    path="/services/table"
                    element={
                      <ServicesTable services={services} getApi={getApi} />
                    }
                  />
                  <Route
                    exact
                    path="/services/create"
                    element={<ServiceCreate URL={URL} getApi={getApi} />}
                  />
                  <Route
                    exact
                    path="/services/edit/:id"
                    element={<ServiceEdit getApi={getApi} />}
                  />
                </Routes>
              </ProtectedRoute>
            }
          />
          <Route exact path="/services/buy/:id" element={<ServiceDetails />} />
          <Route
            exact
            path="/users/login/"
            element={<Login setLoggedUser={setLoggedUser} />}
          />
          <Route
            exact
            path="/users/register/"
            element={<Register setLoggedUser={setLoggedUser} />}
          />
          <Route exact path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
