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
  // console.log(id);

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
              // src={phone.pic}
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
                    {phone.storage}+{phone.RAM}
                  </td>
                </tr>
                {/* <tr>
                  <th>Dimensions</th>
                  <td>
                    Height: 152.7mm <br />
                    Width: 69.9mm <br />
                    Thickness: 8.16mm
                    <br />
                    Weight: 180g
                  </td>
                </tr> */}
                <tr>
                  <th>Display</th>
                  <td>
                    {/* FHD+ 6.28" AMOLED DotDisplay
                    <br />
                    20:9, 2400 x 1080
                    <br />
                    419 ppi
                    <br />
                    Refresh rate: 120Hz
                    <br />
                    Touch sampling rate: up to 480Hz
                    <br />
                    Over 68 billion colors */}
                    {phone.display}
                  </td>
                </tr>
                <tr>
                  <th>Processor</th>
                  <td>
                    {/* Snapdragon® 8 Gen 1 <br />
                    4nm power-efficient manufacturing process <br />
                    CPU: <br />
                    1x Prime core (X2-based), 3.0GHz
                    <br />
                    3x Gold cores (A710-based), 2.5GHz
                    <br />
                    4x Silver cores (A510-based), 1.8GHz
                    <br />
                    GPU: Qualcomm® Adreno™ GPU
                    <br />
                    7th Gen Qualcomm® AI Engine */}
                    {phone.processor}
                  </td>
                </tr>
                <tr>
                  <th>Camera</th>
                  <td>
                    {/* Height: 152.7mm <br />
                    Width: 69.9mm <br />
                    Thickness: 8.16mm
                    <br />
                    Weight: 180g */}
                    {phone.camera}
                  </td>
                </tr>

                <tr>
                  <th>Battery</th>
                  <td>{phone.battery}</td>
                </tr>
                {/* <tr>
                  <th>Cooling System</th>
                  <td>
                    LiquidCool Technology (Super big VC + Multilayer graphite
                    sheets+BN film)
                  </td>
                </tr> */}
                <tr>
                  <th>Security & Authentication</th>
                  <td>{phone.security}</td>
                </tr>
                <tr>
                  <th>NFC</th>
                  <td>
                    {phone.nfc}
                    {/* Supports Google Pay
                    <br />
                    may vary between markets */}
                  </td>
                </tr>
                {/* <tr>
                  <th>Network & Connectivity</th>
                  <td>
                  </td>
                </tr> */}
                <tr>
                  <th>Wireless Networks</th>
                  <td>
                    {phone.network}

                    {/* Bluetooth 5.2
                    <br />
                    Wi-Fi 6 / Wi-Fi 6E */}
                  </td>
                </tr>
                {/* <tr>
                  <th>Navigation & Positioning</th>
                  <td>
                    GPS: L1+L5
                    <br />
                    Galileo: E1+E5a | GLONASS: G1 | Beidou| NavIC: L5
                    <br />
                    A-GPS supplementary positioning | Electronic compass |
                    Wireless network | Data network| SAP
                  </td>
                </tr> */}
                {/* <tr>
                  <th>Vibration motor</th>
                  <td>X-axis linear vibration motor</td>
                </tr>
                <tr>
                  <th>Audio</th>
                  <td>
                    Dual speakers
                    <br />
                    Dolby Atmos®
                    <br />
                    SOUND BY Harman Kardon
                  </td>
                </tr> */}
                <tr>
                  <th>Sensors</th>
                  <td>{phone.sensors}</td>
                </tr>
                <tr>
                  <th>Operating System</th>
                  <td>{phone.os}</td>
                </tr>
                <tr>
                  <th>Package Contains</th>
                  <td>{phone.packagecontains}</td>
                </tr>
                <tr>
                  <th>Price</th>
                  <td>{phone.price}</td>
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
