import React, { useEffect } from "react";
import { getPhones } from "../../redux/actions/phoneAction";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import "./AllPhones.css";

import PhoneCard from "./PhoneCard";

import MetaData from "../layout/Metadata";
import Loader from "../loader/Loader";

function SearchedPhones() {
  const { keyword } = useParams();

  const dispatch = useDispatch();

  // const [price, setPrice] = useState([10000, 150000]);

  const { phones, isLoading } = useSelector((state) => state.phones);

  if (isLoading) {
    <Loader />;
  }

  useEffect(() => {
    dispatch(getPhones(keyword));
  }, [dispatch, keyword]);
  return (
    <div className="container">
      <MetaData title="Phones" />
      <div className="row d-flex justify-content-center my-4">
        {phones &&
          phones.map((phone) => (
            <div
              key={phone._id}
              className="card col-md-4 col-lg-4 col-sm-2"
              style={{ width: "13rem", height: "fit-content" }}
            >
              <PhoneCard phone={phone} />
            </div>
          ))}
      </div>

      {/* <div className="filterBox">
        <Typography>Price</Typography>
        <Slider
          value={price}
          onChange={priceHandler}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          min={10000}
          max={200000}
        />
      </div> */}
    </div>
  );
}

export default SearchedPhones;
