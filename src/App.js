import logo from "./logo.svg";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLogin from "./components/Login/UserLogin";
import UserServices from "./components/Services/UserServices/UserServices";
import Register from "./components/Login/Register";
import AuthProvider from "./contexts/AuthProvider";
import RequireAuth from "./components/Login/RequireAuth/RequireAuth";
import Navigation from "./components/Shared/Navigation";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/userServices"
            element={
              <RequireAuth redirectTo="/login">
                <UserServices />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
