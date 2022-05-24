import React, { Fragment, useEffect, useState } from "react";
import "./MobileForm.css";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/Metadata";
// import SideBar from "./Sidebar";
// import Loader from "../loader/Loader";
import { useNavigate } from "react-router-dom";
import { CREATE_PHONE_RESET } from "../../redux/constants/constants";
import { createPhone } from "../../redux/actions/phoneAction";
// import { CREATE_PHONE_RESET } from "../../redux/constants/constants";
// import { clearErrors, createPhone } from "../../redux/actions/phoneAction";
// import { clearErrors } from "../../redux/actions/userAction";

const MobileForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.newPhone);

  const [image, setImage] = useState("/Profile.png");
  const [imagePreview, setImagePreview] = useState(null);

  const [phone, setPhone] = useState({
    company: "",
    name: "",
    RAM: "",
    processor: "",
    display: "",
    storage: "",
    camera: "",
    os: "",
    category: "",
    battery: "",
    network: "",
    security: "",
    sensors: "",
    nfc: "",
    packagecontains: "",
    price: "",
  });

  const {
    company,
    name,
    RAM,
    processor,
    display,
    storage,
    camera,
    os,
    category,
    battery,
    network,
    security,
    sensors,
    nfc,
    packagecontains,
    price,
  } = phone;

  useEffect(() => {
    // if (error) {
    //   alert.error(error);
    //   dispatch(clearErrors());
    // }

    if (success) {
      alert.success("Product Created Successfully");
      navigate("/admin/dashboard");
      dispatch({ type: CREATE_PHONE_RESET });
    }
  }, [dispatch, alert, error, navigate, success]);

  const inputHandler = (e) => {
    if (e.target.name === "image") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagePreview(reader.result);
          setImage(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setPhone({ ...phone, [e.target.name]: e.target.value });
    }
  };
  const createPhoneSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("company", company);
    myForm.set("RAM", RAM);
    myForm.set("processor", processor);
    myForm.set("display", display);
    myForm.set("storage", storage);
    myForm.set("camera", camera);
    myForm.set("os", os);
    myForm.set("category", category);
    myForm.set("battery", battery);
    myForm.set("network", network);
    myForm.set("security", security);
    myForm.set("sensors", sensors);
    myForm.set("packagecontains", packagecontains);
    myForm.set("nfc", nfc);
    myForm.set("price", price);
    myForm.set("image", image);

    dispatch(createPhone(myForm));
  };

  return (
    <Fragment>
      <MetaData title="Create Product" />
      <div className="dashboard">
        {/* <SideBar /> */}
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createPhoneSubmitHandler}
          >
            <h1>Create Phone</h1>

            <div>
              <input
                type="text"
                id="company"
                placeholder="Company"
                name="company"
                value={company}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="name"
                placeholder="Phone Name"
                name="name"
                value={name}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="RAM"
                placeholder="RAM"
                name="RAM"
                value={RAM}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="processor"
                placeholder="Processor"
                name="processor"
                value={processor}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="display"
                placeholder="Display"
                name="display"
                value={display}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="storage"
                placeholder="Storage"
                name="storage"
                value={storage}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="camera"
                placeholder="Camera"
                name="camera"
                value={camera}
                onChange={inputHandler}
              />
            </div>

            <div>
              <input
                type="text"
                id="os"
                placeholder="Operating System"
                name="os"
                value={os}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="battery"
                placeholder="Battery"
                name="battery"
                value={battery}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="security"
                placeholder="Security"
                name="security"
                value={security}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="nfc"
                placeholder="NFC"
                name="nfc"
                value={nfc}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="network"
                placeholder="Network"
                name="network"
                value={network}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="sensors"
                placeholder="Sensors"
                name="sensors"
                value={sensors}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="category"
                placeholder="Category"
                name="category"
                value={category}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="packagecontains"
                placeholder="Package Contains"
                name="packagecontains"
                value={packagecontains}
                onChange={inputHandler}
              />
            </div>
            <div>
              <input
                type="text"
                id="price"
                placeholder="Price"
                name="price"
                value={price}
                onChange={inputHandler}
              />
            </div>

            <div id="createProductFormFile">
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={inputHandler}
                multiple
              />
            </div>
            {imagePreview && (
              <div id="createProductFormImage">
                <img src={imagePreview} alt="Product Preview" />
              </div>
            )}

            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default MobileForm;
