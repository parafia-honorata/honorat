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
      <h1>Peregrynacja Krzyża i relikwii św. Jana Pawła II</h1>
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
          <h2>Poniedziałek 11.04.2022</h2>
          <ul>
            <li> 16:15 - Przybycie krzyża oraz relikwii - początek ulicy Konopnickiej.</li>
            <li> 16:20 - Procesja do kościoła.</li>
            <li> 16:40 - Koronka do Bożego Miłosierdzia.</li>
            <li> 17:00 - Modlitwa w skupieniu i przygotowanie do Mszy św.</li>
            <li> 18:00 - Msza św. pod przewodnictwem o. Tomasza Pawlika.</li>
            <li> 19:15 - Droga Krzyżowa.</li>
            <li> 20:30 - Wystawienie Najświętszego sakramentu i adoracja w ciszy, możliwość spowiedzi.</li>
            <li> 21:00 - Adoracja – pod przewodnictwem Koła Biblijnego.</li>
            <li> 22:00 - Apel Jasnogórski i zakończenie pierwszego dnia peregrynacji.</li>
          </ul>
          <h2>Wtorek 12.04.2022</h2>
          <ul>
            <li> 8:30 - Możliwość spowiedzi.</li>
            <li> 9:00 - Msza św. parafialno-szkolna.</li>
            <li> 10:00 - Wystawienie Najświętszego Sakramentu i Nabożeństwo do św. Jana Pawła II.</li>
            <li> 11:00 - Różaniec prowadzony przez Żywy Różaniec.</li>
            <li> 11:30  - Adoracja w ciszy, możliwość spowiedzi.</li>
            <li> 12:00 - Litania od Najświętszej Krwi i Rozważanie o Bożym Miłosierdziu.</li>
            <li> 13:00 - Adoracja w ciszy i możliwość spowiedzi.</li>
            <li> 14:00 - Adoracja prowadzona przez młodzież.</li>
            <li> 15:00 - Koronka i zawierzenie parafii oraz zakończenie peregrynacji w parafii.</li>
          </ul>       
        </div>
      </div>
    </div>
  );
};

export default Retreat;
