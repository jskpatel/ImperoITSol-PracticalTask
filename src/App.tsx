import "./App.css";

import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
// import Auth from "./layouts/Auth";
// import { checkAdminAuth } from "./helpers/helpers";
import Dashboard from "./pages/Dashboard";
import Admin from "./layouts/Admin";
import Albums from "./pages/Albums";
import Posts from "./pages/Posts";
import Edit from "./pages/Posts/Edit";

// const ProtectedRoutes = () => {
//   const isLogin = checkAdminAuth();
//   return <>{!isLogin && <Navigate to={"/login"} />}</>;
// };

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            // <Auth>
            <Login />
            // </Auth>
          }
        />
        <Route
          path="/login"
          element={
            // <Auth>
            <Login />
            // </Auth>
          }
        />
        {/* <Route path="" element={<ProtectedRoutes />}> */}
        <Route
          path="/dashboard"
          element={
            <Admin>
              <Dashboard />
            </Admin>
          }
        />
        <Route
          path="/albums"
          element={
            <Admin>
              <Albums />
            </Admin>
          }
        />
        <Route
          path="/posts"
          element={
            <Admin>
              <Posts />
            </Admin>
          }
        />
        <Route
          path="/posts/edit/:id"
          element={
            <Admin>
              <Edit />
            </Admin>
          }
        />
        {/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
