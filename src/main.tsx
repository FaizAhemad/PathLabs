import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import {I18nextProvider} from "react-i18next";
import i18n from "./i18n/i18n.ts";
i18n.init();
i18n.changeLanguage("en");

if (typeof i18n === "object" && i18n !== null) {
  // Now you can safely access properties or methods, e.g.,:
  // Assuming i18n has an 'init' method:
  if ("init" in i18n && typeof i18n.init === "function") {
    (i18n as {init: () => void}).init();
  }
}

import App from "./App.tsx";
import "./index.css";
import LoginAndSignup from "./pages/auth/LoginAndSignup.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";
import KPIs from "./pages/dashboard/kpis/KPIS.tsx";
import Home from "./pages/home/Home.tsx";
import {PageNotFound} from "./pages/not-found/PageNotFound.tsx";
import Offer from "./pages/offers/Offer.tsx";
import Offers from "./pages/offers/Offers.tsx";
import Test from "./pages/tests/Test.tsx";
import Tests from "./pages/tests/Tests.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="home" />}></Route>
          <Route path="/" element={<App />}>
            <Route
              path="/login-signup"
              element={<LoginAndSignup></LoginAndSignup>}
            ></Route>
            <Route path="dashboard" element={<Dashboard />}>
              <Route
                index
                element={<Navigate to="key-performance-metrics" replace />}
              />
              <Route
                path="/dashboard/key-performance-metrics"
                element={<KPIs />}
              />
              <Route
                path="/dashboard/test-report-and-processing-data"
                element={<></>}
              />
              <Route
                path="/dashboard/revenue-and-billing-data"
                element={<></>}
              />
              <Route
                path="/dashboard/inventory-and-stock-data"
                element={<></>}
              />
              <Route
                path="/dashboard/technician-and-staff-performance"
                element={<></>}
              />
              <Route
                path="/dashboard/health-trends-and-analytics"
                element={<></>}
              />
            </Route>

            <Route path="home" element={<Home />}></Route>
            <Route path="offers">
              <Route path="/offers" element={<Offers />}></Route>
              <Route path="/offers/:id" element={<Offer />} />
            </Route>
            <Route path="offers">
              <Route path="/offers" element={<Offers />}></Route>
              <Route path="/offers/:id" element={<Offer />} />
            </Route>
            <Route path="tests">
              <Route path="/tests" element={<Tests />}></Route>
              <Route path="/tests/:name" element={<Test />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </Router>
    </I18nextProvider>
  </StrictMode>
);
