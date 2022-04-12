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
      <h1>Wielki Tydzień 2022</h1>
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
          <h2>Wielka Środa 13.04.2022</h2>
          <ul>
            <li> Wizyta z sakramentami zgłoszonych chorych i osób w podeszłym wieku</li>
          </ul>
          <h2>Wielki Czwartek 14.04.2022</h2>
          <ul>
            <li> 17:30 - Msza św. Ostatniej Wieczerzy</li>
            <li> od ok. 18:30 do 20:00 - Ciche czuwanie razem z Jezusem w Ogrodzie Iliwnym – Ciemnicy</li>
          </ul>
          <h2>Wielki Piątek 15.04.2022</h2>
          <ul>
            <li> 16:45 - Droga krzyżowa</li>
            <li> 17:30 - Nabożeństwo Adoracji Krzyża</li>
            <li> od ok. 18:30 do 22:00 - Adoracja przy grobie</li>
          </ul>
          <h2>Wielki Sobota 16.04.2022</h2>
          <ul>
            <li> od 10:00 do 13:00 co pół godziny i o godzinie 16:00 - Święcenie pokarmów</li>
            <li> 17:30 - Wigilia Paschalna, Czuwanie ku Zmartwychwstaniu</li>
          </ul>
          <h2>Niedziela Zmartwychwstania 17.04.2022</h2>
          <ul>
            <li> 6:00; 10:00; 11:30; 16:30 - Msze święte</li>
          </ul>
          <h2>Poniedziałek Wielkanocny 18.04.2022</h2>
          <ul>
            <li> 8:00; 10:00; 11:30; 16:30 - Msze święte</li>
          </ul>          
        </div>
      </div>
    </div>
  );
};

export default Retreat;
