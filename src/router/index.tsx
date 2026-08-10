import { Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import siteContent from "../content/SiteContent.json";
import Home from "../pages/Home";
import { Styles } from "../styles/styles";

const ExternalRedirect = ({ to }: { to: string }) => {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return null;
};

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/privacy-policy"
          element={<ExternalRedirect to={siteContent.legalUrls.privacyPolicy} />}
        />
        <Route
          path="/terms-and-conditions"
          element={<ExternalRedirect to={siteContent.legalUrls.termsAndConditions} />}
        />
        <Route
          path="/refund-policy"
          element={<ExternalRedirect to={siteContent.legalUrls.refundPolicy} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default Router;
