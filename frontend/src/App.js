import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import AllPhones from "./components/phones/AllPhones";
import PhoneDetails from "./components/phones/PhoneDetails";
import Search from "./components/pages/Search";
import LoginRegister from "./components/auth/LoginRegister";
import Profile from "./components/auth/Profile";
import Account from "./components/auth/Account";
import UpdateProfile from "./components/auth/UpdateProfile";
import Dashboard from "./components/admin/Dashbord";
import Loader from "./components/loader/Loader";
import ProductList from "./components/admin/ProductList";
import store from "./store.js";
import { loadUser } from "./redux/actions/userAction";
import NewPhone from "./components/admin/NewPhone";
import UpdatePhone from "./components/admin/UpdatePhone";
import MobileForm from "./components/Form/MobileForm";
import UserList from "./components/admin/UserList";
import CreatorDashbord from "./components/creator/CreatorDashbord";
import CreatorPhoneList from "./components/creator/CreatorPhoneList";
import CreatorNewPhone from "./components/creator/CreatorNewPhone";
import CreatorUpdatePhone from "./components/creator/CreatorUpdatePhone";
import UpdateUser from "./components/admin/UpdateUser";
import NotFound from "./components/layout/NotFound";

function App() {
  const { isAuthenticated, user, loading } = useSelector((state) => state.user);

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/phones" element={<AllPhones />} />
            <Route path="/phones/:keyword" element={<AllPhones />} />
            <Route path="/login" element={<LoginRegister />} />

            <Route path="/phone/:id" element={<PhoneDetails />} />
            <Route path="/search" element={<Search />} />

            {isAuthenticated &&
              (user.role === "content_creator" ? (
                <Route path="/addphone" element={<MobileForm />} />
              ) : (
                <Route path="/addphone" element={<Navigate to="/" />} />
              ))}

            {isAuthenticated &&
              (!user.role === "admin" ? (
                <Route
                  path="/admin/dashboard"
                  element={<Navigate to="/login" />}
                />
              ) : (
                <Route path="/admin/dashboard" element={<Dashboard />} />
              ))}

            {isAuthenticated &&
              (!user.role === "admin" ? (
                <Route path="/admin/phones" element={<Navigate to="/" />} />
              ) : (
                <Route path="/admin/phones" element={<ProductList />} />
              ))}
            {isAuthenticated &&
              (!user.role === "admin" ? (
                <Route path="/admin/phone" element={<Navigate to="/login" />} />
              ) : (
                <Route path="/admin/phone" element={<NewPhone />} />
              ))}

            {isAuthenticated &&
              (!user.role === "admin" ? (
                <Route path="/admin/phone" element={<Navigate to="/login" />} />
              ) : (
                <Route path="/admin/phone/:id" element={<UpdatePhone />} />
              ))}

            {isAuthenticated &&
              (!user.role === "admin" ? (
                <Route path="/admin/users" element={<Navigate to="/" />} />
              ) : (
                <Route path="/admin/users" element={<UserList />} />
              ))}

            {isAuthenticated &&
              (!user.role === "admin" ? (
                <Route path="/admin/user/:id" element={<Navigate to="/" />} />
              ) : (
                <Route path="/admin/user/:id" element={<UpdateUser />} />
              ))}

            {isAuthenticated &&
              (!user.role === "content_creator" ? (
                <Route
                  path="/creator/profile"
                  element={<Navigate to="/login" />}
                />
              ) : (
                <Route path="/creator/profile" element={<CreatorDashbord />} />
              ))}

            {isAuthenticated &&
              (!user.role === "content_creator" ? (
                <Route
                  path="/creator/phones"
                  element={<Navigate to="/login" />}
                />
              ) : (
                <Route path="/creator/phones" element={<CreatorPhoneList />} />
              ))}

            {isAuthenticated &&
              (!user.role === "content_creator" ? (
                <Route
                  path="/creator/phone"
                  element={<Navigate to="/login" />}
                />
              ) : (
                <Route path="/creator/phone" element={<CreatorNewPhone />} />
              ))}

            {isAuthenticated &&
              (!user.role === "content_creator" ? (
                <Route
                  path="/creator/phone/:id"
                  element={<Navigate to="/login" />}
                />
              ) : (
                <Route
                  path="/creator/phone/:id"
                  element={<CreatorUpdatePhone />}
                />
              ))}

            {isAuthenticated ? (
              <Route path="/account" element={<Account user={user} />} />
            ) : (
              <Route
                path="/account"
                element={<Navigate to="/login" replace />}
              />
            )}
            {isAuthenticated ? (
              <Route
                path="/me/update"
                element={<UpdateProfile user={user} />}
              />
            ) : (
              <Route
                path="/me/update"
                element={<Navigate to="/login" replace />}
              />
            )}
            <Route path="*" element={<NotFound />} />
          </Routes>
          {isAuthenticated && <Profile user={user} />}
          <Footer />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
