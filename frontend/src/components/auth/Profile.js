import React, { useState } from "react";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import Backdrop from "@material-ui/core/Backdrop";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import ListAltIcon from "@material-ui/icons/ListAlt";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import "./Profile.css";
import { useAlert } from "react-alert";

function Profile({ user }) {
  const alert = useAlert();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const options = [
    // { icon: <ListAltIcon />, name: "Orders", func: orders },
    { icon: <PersonIcon />, name: "Profile", func: account },
    // {
    //   icon: (
    //     <ShoppingCartIcon
    //       style={{ color: cartItems.length > 0 ? "tomato" : "unset" }}
    //     />
    //   ),
    //   name: `Cart(${cartItems.length})`,
    //   func: cart,
    // },
    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
  ];

  function dashboard() {
    navigate("/admin/dashboard");
  }
  function creatorDashboard() {
    navigate("/creator/profile");
  }

  function account() {
    navigate("/account");
  }
  // function cart() {
  //   navigate("/cart");
  // }
  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
    navigate("/");
  }

  if (user.role === "admin") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }
  if (user.role === "content_creator") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: creatorDashboard,
    });
  }

  return (
    <>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "11" }}
        open={open}
        direction="down"
        className="speedDial"
        icon={
          <img className="speedDialIcon" src="/profile.png" alt="Profile" />
        }
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth <= 600 ? true : false}
          />
        ))}
      </SpeedDial>
    </>
  );
}

export default Profile;
