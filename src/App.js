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
import Footer from "./components/layout/Footer";
import ServicesTable from "./components/views/services/serviceTable/ServicesTable.jsx";
import ServiceCreate from "./components/views/services/serviceCreate/ServiceCreate.jsx";
import ServiceEdit from "./components/views/services/serviceEdit/ServiceEdit.jsx";
import ServiceDetails from "./components/views/services/serviceDetails/ServiceDetails.jsx";
import ProductsTable from "./components/views/products/productTable/ProductsTable.jsx";
import ProductCreate from "./components/views/products/productCreate/ProductCreate.jsx";
import ProductEdit from "./components/views/products/productEdit/ProductEdit.jsx";
import ProductDetails from "./components/views/products/productDetails/ProductDetails.jsx";
import Login from "./components/views/users/login/Login.jsx";
import Register from "./components/views/users/register/register.jsx";
import UsersTable from "./components/views/users/usersTable/UsersTable.jsx";
import UserEdit from "./components/views/users/userEdit/UserEdit.jsx";

function App() {
  const [information, setInformation] = useState([]);
  const [loggedUser, setLoggedUser] = useState([]);
  const URL = process.env.REACT_APP_Apex_Gym;

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async (link) => {
    try {
      switch (link) {
        case "services":
          const resServices = await axios.get(`${URL}/${link}`);
          setInformation(resServices.data);
          break;
        case "products":
          const resProducts = await axios.get(`${URL}/${link}`);
          setInformation(resProducts.data);
          break;
        case "users":
          const resUsers = await axios.get(`${URL}/${link}`);
          setInformation(resUsers.data);
          break;
        default:
          const resSer = await axios.get(`${URL}/services`);
          setInformation(resSer.data);
          break;
      }
    } catch{
    }
  };

  return (
    <BrowserRouter>
      <Navigation loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
      <main>
        <Routes>
          <Route exact path="/" element={<Home information={information} getApi={getApi}/>} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Routes>
                  <Route exact path="/" element={<Home information={information} getApi={getApi}/>} />
                  <Route
                    exact
                    path="/services/table"
                    element={
                      <ServicesTable services={information} getApi={getApi} />
                    }
                  />
                  <Route
                    exact
                    path="/products/table"
                    element={
                      <ProductsTable products={information} getApi={getApi} />
                    }
                  />
                  <Route
                    exact
                    path="/users/table"
                    element={<UsersTable users={information} getApi={getApi} />}
                  />
                  <Route
                    exact
                    path="/services/create"
                    element={<ServiceCreate URL={URL} getApi={getApi} />}
                  />
                  <Route
                    exact
                    path="/products/create"
                    element={<ProductCreate URL={URL} getApi={getApi} />}
                  />
                  <Route
                    exact
                    path="/services/edit/:id"
                    element={<ServiceEdit getApi={getApi} />}
                  />
                  <Route
                    exact
                    path="/products/edit/:id"
                    element={<ProductEdit getApi={getApi} />}
                  />
                  <Route
                    exact
                    path="/users/edit/:id"
                    element={<UserEdit getApi={getApi} />}
                  />
                </Routes>
              </ProtectedRoute>
            }
          />
          <Route exact path="/services/buy/:id" element={<ServiceDetails />} />
          <Route exact path="/products/buy/:id" element={<ProductDetails />} />
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
