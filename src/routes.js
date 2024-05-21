import { Route, Routes } from "react-router";
import App from "./App";
import Classes from "./Screens/Classes/Classes";
import ClassPage from "./Screens/Classes/ClassPage/ClassPage";
import Post from "./Screens/Classes/Post/Post";
import Home from "./Screens/Home/home";
import Register from "./Screens/Login/Register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/classes" element={<Classes />} />
      <Route path="/classpage" element={<ClassPage/>} />
      <Route path="/post" element={<Post/>} />
      <Route path="/register" element={<Register/>} />
    </Routes>
  );
}

export default AppRoutes;
