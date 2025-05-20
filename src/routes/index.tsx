import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NotFoundScreen from "../screens/not-found/NotFound";
import Login from "../screens/login/Login";
import UserProfile from "../screens/UserPofile";
import SidebarLayout from "../layout/SidebarLayout";
// import Home from "../screens/home/Home";

// import Documents from "../screens/documents/Documents";
// import BankingInformation from "../screens/banking-information/BankingInformation";
// import CompanyProfile from "../screens/profiles/CompanyProfile";
// import UserProfile from "../screens/profiles/UserPofile";

const MainRoutes = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/login" element={<Login />} />
          <Route element={<SidebarLayout />}>
            {/* <Route index element={<CompanyProfile />} />
            <Route path="banking-info" element={<BankingInfo />} />
            <Route path="documents" element={<Documents />} /> */}
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="*" element={<NotFoundScreen />} />
          </Route>
      </Routes>
    </Router>
  );
};
export default MainRoutes;
