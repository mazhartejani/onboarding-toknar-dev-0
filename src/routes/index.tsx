import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NotFoundScreen from "../screens/not-found/NotFound";
import Login from "../screens/login/Login";
import UserProfile from "../screens/UserPofile";
import SidebarLayout from "../layout/SidebarLayout";
import Documents from "../screens/documents/Documents";
import BankingInformation from "../screens/banking-information/BankingInformation";
import CompanyProfile from "../screens/company-profile";

const MainRoutes = () => {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
          <Route element={<SidebarLayout />}>
            <Route path="company-profile" element={<CompanyProfile />} />
            <Route path="banking-info" element={<BankingInformation />} />
            <Route path="documents" element={<Documents />} /> 
            <Route path="user-profile" element={<UserProfile />} />
            <Route path="*" element={<NotFoundScreen />} />
          </Route>
      </Routes>
    </Router>
  );
};
export default MainRoutes;
