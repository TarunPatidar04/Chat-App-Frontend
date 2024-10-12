import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Chat = lazy(() => import("./pages/Chat"));
const Login = lazy(() => import("./pages/Login"));
const Groups = lazy(() => import("./pages/Groups"));
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Your routes */}
          <Route path="/" element={<Home />} />
          <Route path="/chat/:chatId" element={<Chat />} />
          <Route path="/groups" element={<Groups />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>NotFound</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
