import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import NoPage from "./pages/no-page/NoPage";
import Home from "./pages/home/Home";
import LearnMore from "./pages/learn-more/LearnMore";

import { LanguageProvider } from "./contexts/LanguageContext";

import './styles/Styles.scss';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="learnmore" element={<LearnMore />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
