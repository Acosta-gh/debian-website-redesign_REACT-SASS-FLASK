import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import NoPage from "./pages/no-page/NoPage";
import Home from "./pages/home/Home";
import News from "./pages/news/News";
import Article from "./pages/article/Article";
import Login from "./pages/login/Login";
import AdminPanel from "./pages/admin-panel/AdminPanel";
import LearnMore from "./pages/learn-more/LearnMore";
import Donate from "./pages/donate/Donate";

import { LanguageProvider } from "./contexts/LanguageContext";

import './styles/Styles.scss';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="learnmore" element={<LearnMore />} />
            <Route path="article/:id" element={<Article />} />
            <Route path="login" element={<Login />} />
            <Route path="adminpanel" element={<AdminPanel />} />
            <Route path="donate" element={<Donate />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
