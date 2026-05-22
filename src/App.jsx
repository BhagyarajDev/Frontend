import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminLayout from "./Admin/AdminLayout";
// import AdminSidebar from "./Admin/component/AdminSidebar";
import Layout from "./Layout";
import Login from "./Login";
import Register from "./Register";
import AdminDashbaord from "./Admin/pages/AdminDashbaord";
import CategoryPage from "./Admin/pages/AdminCategory";
import AdminProduct from "./Admin/pages/AdminProduct";
import AdminOder from "./Admin/pages/AdminOder";
import { User } from "lucide-react";
import UserLayout from "./User/UserLayout";
import UserDashboard from "./User/pages/UserDashboard";

function App() {
  // const [count, setCount] = useState(0);

  return (
    // <BrowswerRouter>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashbaord />} />
          <Route path="dashboard" element={<AdminDashbaord />} />
          <Route path="category" element={<CategoryPage />} />
          <Route path="product" element={<AdminProduct />} />
          <Route path="oder" element={<AdminOder />} />
        </Route>
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<UserDashboard />} />
          <Route path="dashboard" element={<AdminDashbaord />} />
          <Route path="category" element={<CategoryPage />} />
          <Route path="product" element={<AdminProduct />} />
          <Route path="oder" element={<AdminOder />} />
        </Route>

        {/* <Route path="/user" element={<AdminSidebar />} /> */}
        {/* <Route path="/admin" element={<Admin />} /> */}
      </Routes>
    </Router>
    // </BrowswerRouter>
  );
}

export default App;
