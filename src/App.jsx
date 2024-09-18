import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "../src/Pages/Home/Home";
import "./Style.scss";
import Categories from "./Pages/Categories/Categories";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ProductPage from "./Pages/ProductPage/ProductPage";
import Cart from "./Pages/Cart/Cart";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((stat) => stat.user.currentUser);
  const Layout = () => {
    return (
      <div>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    );
  };
  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to={"/login"} />;
    } else {
      return children;
    }
  };
  const AuthRedirect = ({ children }) => {
    if (user) {
      return <Navigate to="/" />;
    } else {
      return children;
    }
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/categories",
          element: <Categories />,
        },
        {
          path: "/product/:id",
          element: <ProductPage />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
    {
      path: "/login",
      element: (
        <AuthRedirect>
          <Login />
        </AuthRedirect>
      ),
    },
    {
      path: "/Register",
      element: (
        <AuthRedirect>
          <Register />
        </AuthRedirect>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
