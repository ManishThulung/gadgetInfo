import React, { useEffect } from "react";
import SubHome from "./SubHome";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../loader/Loader";
import MetaData from "../layout/Metadata";
import { getPhones } from "../../redux/actions/phoneAction";

function UpcommingPhonesAll() {
  const dispatch = useDispatch();
  const { phones, loading } = useSelector((state) => state.phones);
  if (loading) {
    <Loader />;
  }

  useEffect(() => {
    dispatch(getPhones());
  }, [dispatch]);

  return (
    <div className="container category">
      <MetaData title="Upcoming Phones" />
      <h3 className="badge rounded-pill bg-danger topic">Upcoming Phones</h3>

      <div className="row d-flex justify-content-center my-4">
        {phones &&
          phones.map(
            (phone) =>
              phone.category === "upcoming" && (
                <div
                  key={phone._id}
                  className="card col-md-4 col-lg-4 col-sm-2"
                  style={{ width: "13rem", height: "fit-content" }}
                >
                  <SubHome phone={phone} />
                </div>
              )
          )}
      </div>
    </div>
  );
}

export default UpcommingPhonesAll;
