import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ConnectWalletDesk from "./pages/ConnectWalletDesk";
import Modal from "./pages/Modal";
import SingleProductPage from "./pages/SingleProductPage";
import ThankYouPage from "./pages/ThankYouPage";
import LandingPage from "./pages/LandingPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/modal":
        title = "";
        metaDescription = "";
        break;
      case "/single-product-page":
        title = "";
        metaDescription = "";
        break;
      case "/thank-you-page":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ConnectWalletDesk />} />
      <Route path="/modal" element={<Modal />} />
      <Route path="/single-product-page" element={<SingleProductPage />} />
      <Route path="/thank-you-page" element={<ThankYouPage />} />
      <Route path="/landing-page" element={<LandingPage />} />
    </Routes>
  );
}
export default App;
