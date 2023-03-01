import React from "react";
import facebook from "../../assets/icon/Facebook - Original.png";
import instagram from "../../assets/icon/Instagram - Original.png";
import Telegram from "../../assets/icon/Telegram - Original.png";
import TikTok from "../../assets/icon/TikTok - Original.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-table container">
        <div className="Documents">
          <div className="Documents_title">Hujjatlar</div>
          <div className="Documents_text">
            <div>Umumiy shartlar</div>
            <div>Ofertalar arxivi</div>
            <div>Nizom</div>
            <div>Guvohnoma</div>
          </div>
        </div>

        <div className="Service">
          <div className="Service_title">Servis</div>
          <div className="Service_text">
            <div>Do’konlar</div>
            <div>Biz haqimizda</div>
            <div>Hamkorlik uchun</div>
            <div>Qaytarish</div>
            <div>Promokodlar</div>
          </div>
        </div>

        <div className="ProductCatalog">
          <div className="ProductCatalog_title">Mahsulotlar katalogi</div>
          <div className="ProductCatalog_text">
            <div>Katalog 1</div>
            <div>Katalog 1</div>
            <div>Katalog 2</div>
            <div>Katalog 2</div>
            <div>Katalog 3</div>
            <div>Katalog 3</div>
          </div>
        </div>

        <div className="InformationService">
          <div className="InformationService_title">Axbarot xizmati</div>
          <div className="InformationService_text">
            <div>contact.@nextstore.uz</div>
            <div>
              +998 97 712 96 96 <br /> +998 95 503 09 09
            </div>
            <div>
              Sag’bon 186, Olmazor tumani, Toshkent, <br /> O'zbekiston
            </div>
            <div className="InformationServiceIcon">
              <div className="icon">
                <img
                  src={facebook}
                  alt={"facebook"}
                  style={{ paddingLeft: "10px" }}
                />
                <img
                  src={instagram}
                  alt={"instagram"}
                  style={{ paddingLeft: "10px" }}
                />
                <img
                  src={Telegram}
                  alt={"Telegram"}
                  style={{ paddingLeft: "10px" }}
                />
                <img
                  src={TikTok}
                  alt={"TikTok"}
                  style={{ paddingLeft: "10px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr className="line" />
      <div className="footer_dicription  container">
        <div>2022 Nextstore.com</div>
        <div>Powered by </div>
      </div>
    </div>
  );
};

export default Footer;
