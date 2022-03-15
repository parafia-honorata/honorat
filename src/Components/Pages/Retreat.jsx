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
          <h2>Niedziela 20.03.2022</h2>
          <ul>
            <li> 8:00 - Msza św. z nauką ogólną.</li>
            <li> 10:00 - Msza św. z nauką dla młodzieży.</li>
            <li> 11:30 - Msza św. z nauką dla dzieci.</li>
            <li> 16:00 - „Gorzkie Żale” z kazaniem pasyjnym.</li>
            <li> 16:30 - Msza św. z nauką ogólną.</li>
          </ul>
          <h2>Poniedziałek 21.03.2022</h2>
          <ul>
            <li> 8:00  - Msza św. z nauką ogólną. </li>
            <li> 9:30 - Nauka dla dzieci kl. 1 do 4 oraz Przedszkola.</li>
            <li> 11:00 - Nauka dla dzieci i młodzieży kl. 5 do 8.</li>
            <li> 17:30 - Msza św. z nauką ogólną.</li>
          </ul>
          <h2>Wtorek 22.03.2022</h2>
          <ul>
            <li> 7:30  - Spowiedź dla wszystkich.</li>
            <li> 8:00 - Msza św. z nauką ogólną.</li>
            <li> 9:15 - Spowiedź kl. 4.</li>
            <li> 9:30 - Nauka ogólna dla dzieci kl. 1 do 4 oraz Przedszkola.</li>
            <li> 10:30  - Spowiedź kl. 5 do 8.</li>
            <li> 11:00 - Msza św. dla dzieci i młodzieży kl. 5 do 8. </li>
            <li> 17:00 - Spowiedź dla wszystkich.</li>
            <li> 17:30 - Msza św. z nauką ogólną – Zakończenie.</li>
          </ul>     
          <h2>Środa 23.03.2022</h2>
          <ul>

            <li> 9:30 - Msza św. dla dzieci kl. 1 do 4 oraz Przedszkola.</li>
            <li> 11:30 - Msza św. dla dzieci i młodzieży kl. 5 do 8</li>
          </ul>    
          
        </div>
      </div>
    </div>
  );
};

export default Retreat;
