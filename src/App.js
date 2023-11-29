import { useEffect, useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [services, setServices] = useState([]);
  const [loggedUser, setLoggedUser] = useState([]);
  const URL = import.meta.env.Apex_Gym;

  useEffect(() =>{
    getApi();
  },[]);

  const getApi = async()=>{
    try{
      const res = await axios.get(URL);
      setServices(res.data);
    }catch (error){
      console.log(error);
    }
  };

  return (
    <BrowserRouter>
      <Navigation loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
      <main>
        <Routes>
          <Route exact path='/' element={<Home services={services} />} />
          <Route
            path='/*'
            element={
              <ProtectedRoute>
                <Routes>
                  <Route
                    exact
                    path='/service/table'
                    element={
                      <ServicesTable services={services} getApi={getApi} />}
                  />
                  <Route
                      exact
                      path='/service/create'
                      element={<ServiceCreate URL={URL} getApi={getApi} />}
                  />
                  <Route
                      exact
                      path='/service/edit/:id'
                      element={<ServiceEdit getApi={getApi}/>}/>
                </Routes>
              </ProtectedRoute>
            }
            />
            <Route exact path='/service/buy/:id' element={<ServiceDetails/>} />
            <Route exact path='/users/login/' element={<Login setLoggedUser={setLoggedUser}/>} />
            <Route exact path='/users/register/' element={<Register setLoggedUser={setLoggedUser}/>} />
            <Route exact path='*' element={<Error404/>}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
