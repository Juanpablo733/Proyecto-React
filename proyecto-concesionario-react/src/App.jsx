import "./styles/styles.css"
import "./styles/login.css"
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/admin/Index";
import Index from "./pages/Index";
import Registro from "./pages/Registro";
import PublicLayout from "./layouts/PublicLayout";
import PrivateLayout from "./layouts/PrivateLayout";
import AuthLayout from "./layouts/AuthLayout";
import Vehiculos from "./pages/admin/Vehiculos";


// En este archivo va el router principal
// de último en las rutas va la del index

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout> 
          <Index />
          </PublicLayout>}>          
        </Route> 
        <Route path="/admin" element={<PrivateLayout> 
          <Admin />
          </PrivateLayout>}>          
        </Route>
        <Route path="/admin/vehiculos" element={<PrivateLayout> 
          <Vehiculos />
          </PrivateLayout>}>          
        </Route>
        <Route path="/login" element={<AuthLayout> 
          <Login />
        </AuthLayout>}>          
        </Route>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
