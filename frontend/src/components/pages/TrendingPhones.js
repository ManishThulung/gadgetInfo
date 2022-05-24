import React, { useState } from "react";
import SubHome from "./SubHome";
import "./Home.css";

function TrendingPhones({ topic, phones }) {
  // const [num, setNum] = useState(1);
  return (
    <div className="container category">
      <h3 className="badge rounded-pill bg-danger topic">{topic}</h3>

      <div className="row d-flex justify-content-center my-4">
        {phones &&
          phones.map((phone) =>
            phone.category === "trending" ? (
              <div
                key={phone._id}
                className="card col-md-4 col-lg-4 col-sm-2"
                style={{ width: "13rem", height: "fit-content" }}
              >
                {/* {num <= 3 && <SubHome phone={phone} />} */}
                <SubHome phone={phone} />

                {/* {setNum(num + 1)}
                {console.log(`${num}`)} */}
              </div>
            ) : (
              ""
            )
          )}
      </div>
    </div>
  );
}

export default TrendingPhones;
