import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UpdatePhone.css";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/Metadata";
import SideBar from "./Sidebar";
// import Loader from "../loader/Loader";
import { useNavigate } from "react-router-dom";
import { UPDATE_PHONE_RESET } from "../../redux/constants/constants";
import {
  clearErrors,
  getSinglePhone,
  updatePhone,
} from "../../redux/actions/phoneAction";
import Loader from "../loader/Loader";
// import { clearErrors } from "../../redux/actions/userAction";

const UpdatePhone = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { id } = useParams();

  const { phone, isLoading } = useSelector((state) => state.phoneDetails);

  // if (phone || phone) {
  //   return <Loader />;
  // }

  // console.log(phone);
  // console.log(phone.image.map((img) => img.url));
  // console.log(phone.image);
  // console.log(phone._id);
  // console.log(id);

  const { loading, error, isUpdated } = useSelector(
    (state) => state.deleteUpdate
  );

  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const [company, setcompany] = useState("");
  const [name, setname] = useState("");
  const [RAM, setRAM] = useState("");
  const [processor, setprocessor] = useState("");
  const [display, setdisplay] = useState("");
  const [storage, setstorage] = useState("");
  const [camera, setcamera] = useState("");
  const [os, setos] = useState("");
  const [category, setcategory] = useState("");
  const [battery, setbattery] = useState("");
  const [network, setnetwork] = useState("");
  const [security, setsecurity] = useState("");
  const [sensors, setsensors] = useState("");
  const [nfc, setnfc] = useState("");
  const [packagecontains, setpackagecontains] = useState("");
  const [price, setprice] = useState("");

  // const [phone, setPhone] = useState({
  //   company: "",
  //   name: "",
  //   RAM: "",
  //   processor: "",
  //   display: "",
  //   storage: "",
  //   camera: "",
  //   os: "",
  //   category: "",
  //   battery: "",
  //   network: "",
  //   security: "",
  //   sensors: "",
  //   nfc: "",
  //   packagecontains: "",
  //   price: "",
  // });

  // const {
  //   company,
  //   name,
  //   RAM,
  //   processor,
  //   display,
  //   storage,
  //   camera,
  //   os,
  //   category,
  //   battery,
  //   network,
  //   security,
  //   sensors,
  //   nfc,
  //   packagecontains,
  //   price,
  // } = phone;

  const inputHandler = (e) => {
    // if (e.target.name === "image") {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImagePreview(reader.result);
        setImage(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
    // }
    // else {
    //   setPhone({ ...phone, [e.target.name]: e.target.value });
    // }
  };
  const updatePhoneSubmitHandler = (e) => {
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
    myForm.set("nfc", nfc);
    myForm.set("packagecontains", packagecontains);
    myForm.set("price", price);
    myForm.set("image", image);

    dispatch(updatePhone(id, myForm));
  };

  useEffect(() => {
    // dispatch(getSinglePhone(id));
    if (phone._id !== id) {
      // if (phone) {
      dispatch(getSinglePhone(id));
    } else {
      // setPhone({
      setcompany(phone.company);
      setname(phone.name);
      setRAM(phone.RAM);
      setprocessor(phone.processor);
      setdisplay(phone.display);
      setstorage(phone.storage);
      setcamera(phone.camera);
      setos(phone.os);
      setcategory(phone.category);
      setbattery(phone.battery);
      setnetwork(phone.network);
      setsecurity(phone.security);
      setsensors(phone.sensors);
      setnfc(phone.nfc);
      setpackagecontains(phone.packagecontains);
      setprice(phone.price);
      // });
      setImagePreview(phone.image.map((img) => img.url));

      // setImage(phone.image.map((img) => img.url));
    }
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (isUpdated) {
      alert.success("Product Updated Successfully");
      navigate("/admin/phones");
      dispatch({ type: UPDATE_PHONE_RESET });
    }
  }, [dispatch, alert, error, navigate, isUpdated, id, phone, isLoading]);

  if (!phone) {
    return <Loader />;
  }
  return (
    <Fragment>
      <MetaData title="Update Phone" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={updatePhoneSubmitHandler}
          >
            <h1>Update Phone</h1>

            <div>
              <input
                type="text"
                id="company"
                placeholder="Company"
                name="company"
                value={company}
                // onChange={inputHandler}
                onChange={(e) => setcompany(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="name"
                placeholder="Phone Name"
                name="name"
                value={name}
                // onChange={inputHandler}
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="RAM"
                placeholder="RAM"
                name="RAM"
                value={RAM}
                // onChange={inputHandler}
                onChange={(e) => setRAM(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="processor"
                placeholder="Processor"
                name="processor"
                value={processor}
                // onChange={inputHandler}
                onChange={(e) => setprocessor(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="display"
                placeholder="Display"
                name="display"
                value={display}
                // onChange={inputHandler}
                onChange={(e) => setdisplay(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="storage"
                placeholder="Storage"
                name="storage"
                value={storage}
                // onChange={inputHandler}
                onChange={(e) => setstorage(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="camera"
                placeholder="Camera"
                name="camera"
                value={camera}
                // onChange={inputHandler}
                onChange={(e) => setcamera(e.target.value)}
              />
            </div>

            <div>
              <input
                type="text"
                id="os"
                placeholder="Operating System"
                name="os"
                value={os}
                // onChange={inputHandler}
                onChange={(e) => setos(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="battery"
                placeholder="Battery"
                name="battery"
                value={os}
                // onChange={inputHandler}
                onChange={(e) => setbattery(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="security"
                placeholder="Security"
                name="security"
                value={security}
                // onChange={inputHandler}
                onChange={(e) => setsecurity(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="nfc"
                placeholder="NFC"
                name="nfc"
                value={nfc}
                // onChange={inputHandler}
                onChange={(e) => setnfc(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="network"
                placeholder="Network"
                name="network"
                value={network}
                // onChange={inputHandler}
                onChange={(e) => setnetwork(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="sensors"
                placeholder="Sensors"
                name="sensors"
                value={sensors}
                // onChange={inputHandler}
                onChange={(e) => setsensors(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="category"
                placeholder="Category"
                name="category"
                value={category}
                // onChange={inputHandler}
                onChange={(e) => setcategory(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="packagecontains"
                placeholder="Package Contains"
                name="packagecontains"
                value={packagecontains}
                // onChange={inputHandler}
                onChange={(e) => setpackagecontains(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                id="price"
                placeholder="Price"
                name="price"
                value={price}
                // onChange={inputHandler}
                onChange={(e) => setprice(e.target.value)}
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
                <img src={imagePreview} alt="Old Product Preview" />
              </div>
            )}

            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Update
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdatePhone;
