import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/homePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
