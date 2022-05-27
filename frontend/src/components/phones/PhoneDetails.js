import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSinglePhone } from "../../redux/actions/phoneAction";
import Loader from "../loader/Loader";
import "./PhoneDetails.css";

function PhoneDetails() {
  const dispatch = useDispatch();
  const { phone, isLoading } = useSelector((state) => state.phoneDetails);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getSinglePhone(id));
  }, [dispatch, id]);

  if (!phone) return null;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="container">
        <div className="row phone">
          <h2 className="text-center name">{phone.name}</h2>
          <div className="col-lg-8" style={{ textAlign: "center" }}>
            <img
              src={phone.image.map((img) => img.url)}
              alt=""
              srcSet=""
              style={{ width: "50%" }}
            />
          </div>
          <div className="col-lg-8">
            <h2 className="name centerr">
              <span className="center">Specifications</span>
            </h2>
            <div className="table">
              <table className="table table-striped tableText" border="2px">
                <tr>
                  <th>Storage & RAM</th>
                  <td>
                    <b>
                      {phone.storage}+{phone.RAM}
                    </b>
                    <Typography>
                      External Memory: {phone.externalMemory}
                    </Typography>
                  </td>
                </tr>

                <tr>
                  <th>Display</th>
                  <td>
                    <b>{phone.display}</b>

                    {phone.displayExtraOne !== undefined && (
                      <Typography>{phone.displayExtraOne}</Typography>
                    )}
                    {phone.displayExtraTwo !== undefined && (
                      <Typography>{phone.displayExtraTwo}</Typography>
                    )}
                    {phone.displayExtraThree !== "" && (
                      <Typography>{phone.displayExtraThree}</Typography>
                    )}
                    {phone.displayExtraFour !== "" && (
                      <Typography>{phone.displayExtraFour}</Typography>
                    )}
                    {phone.displayExtraFive !== "" && (
                      <Typography>{phone.displayExtraFive}</Typography>
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Processor</th>
                  <td>
                    <b>{phone.processor}</b>
                    {phone.processorExtraOne !== "" && (
                      <Typography>{phone.processorExtraOne}</Typography>
                    )}
                    {phone.processorExtraTwo !== "" && (
                      <Typography>{phone.processorExtraTwo}</Typography>
                    )}
                    {phone.processorExtraThree !== "" && (
                      <Typography>{phone.processorExtraThree}</Typography>
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Camera</th>
                  <td>
                    <b>{phone.camera}</b>
                    {phone.cameraExtraOne !== "" && (
                      <Typography>Front: {phone.cameraExtraOne}</Typography>
                    )}
                    {phone.cameraExtraTwo !== "" && (
                      <Typography>Front: {phone.cameraExtraTwo}</Typography>
                    )}
                    {phone.cameraExtraThree !== "" && (
                      <Typography>{phone.cameraExtraThree}</Typography>
                    )}
                  </td>
                </tr>

                <tr>
                  <th>Battery</th>
                  <td>
                    <b>{phone.battery}</b>
                    {phone.batteryExtraOne !== "" && (
                      <Typography>{phone.batteryExtraOne}</Typography>
                    )}
                    {phone.batteryExtraTwo !== "" && (
                      <Typography>{phone.batteryExtraTwo}</Typography>
                    )}
                    {phone.batteryExtraThree !== "" && (
                      <Typography>{phone.batteryExtraThree}</Typography>
                    )}
                  </td>
                </tr>

                <tr>
                  <th>Security & Authentication</th>
                  <td>
                    <b>{phone.security}</b>
                    {phone.securityExtraOne !== "" && (
                      <Typography>{phone.securityExtraOne}</Typography>
                    )}
                    {phone.securityExtraTwo !== "" && (
                      <Typography>{phone.securityExtraTwo}</Typography>
                    )}
                  </td>
                </tr>
                <tr>
                  <th>NFC</th>
                  <td>
                    <b>{phone.nfc}</b>
                    {phone.nfcExtraOne !== "" && (
                      <Typography>{phone.nfcExtraOne}</Typography>
                    )}
                    {phone.nfcExtraTwo !== "" && (
                      <Typography>{phone.nfcExtraTwo}</Typography>
                    )}
                    {phone.nfcExtraThree !== "" && (
                      <Typography>{phone.nfcExtraThree}</Typography>
                    )}
                  </td>
                </tr>

                <tr>
                  <th>Networks</th>
                  <td>
                    <b>{phone.network}</b>

                    {phone.networkExtraOne && (
                      <Typography>{phone.networkExtraOne}</Typography>
                    )}
                    {phone.networkExtraTwo && (
                      <Typography>{phone.networkExtraTwo}</Typography>
                    )}
                    {phone.networkExtraThree && (
                      <Typography>{phone.networkExtraThree}</Typography>
                    )}
                  </td>
                </tr>

                <tr>
                  <th>Sensors</th>
                  <td>
                    <b>{phone.sensors}</b>
                    {phone.sensorsExtraOne !== "" && (
                      <Typography>{phone.sensorsExtraOne}</Typography>
                    )}
                    {phone.sensorsExtraTwo !== "" && (
                      <Typography>{phone.sensorsExtraTwo}</Typography>
                    )}
                    {phone.sensorsExtraThree !== "" && (
                      <Typography>{phone.sensorsExtraThree}</Typography>
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Operating System</th>
                  <td>
                    <b>{phone.os}</b>
                    {phone.osExtraOne !== "" && (
                      <Typography>{phone.osExtraOne}</Typography>
                    )}
                    {phone.osExtraTwo !== "" && (
                      <Typography>{phone.osExtraTwo}</Typography>
                    )}
                    {phone.osExtraThree !== "" && (
                      <Typography>{phone.osExtraThree}</Typography>
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Package Contains</th>
                  <td>
                    <b>{phone.packagecontains}</b>
                    {phone.packagecontainsExtraOne !== "" && (
                      <Typography>{phone.packagecontainsExtraOne}</Typography>
                    )}
                    {phone.packagecontainsExtraTwo !== "" && (
                      <Typography>{phone.packagecontainsExtraTwo}</Typography>
                    )}
                  </td>
                </tr>
                <tr>
                  <th>Price</th>
                  <td>
                    <b>&#x20b9; {phone.price}</b>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneDetails;
