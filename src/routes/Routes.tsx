import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../layouts/Layout";


const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes with Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
      {/* Routes without Layout */}
    </Routes>
  );
};

export default AppRoutes;
