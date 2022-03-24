import React, { useEffect } from "react";
import "./Retreat.css";
import { Image } from "antd";
import stockPic3 from "../../Assets/stock-pic3.jpg";

const Retreat = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="retreat-page sub-page">
      <h1>Rekolekcje</h1>
      <div className="section card history reverted">
        <div className="special">
          <Image
            src={stockPic3}
            preview={false}
            alt="pic"
            className="vertical-image"
          />
        </div>
        <div className="text">
          <h2>Adwent 2022</h2>   
        </div>
      </div>
    </div>
  );
};

export default Retreat;
