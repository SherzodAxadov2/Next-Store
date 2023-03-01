import "./nav.css";
import React, { useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { MdEmail } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import logo from "../../assets/icons/Logo (1).png";
import user from "../../assets/icons/user.png";
import LoginModal from "../../modals/LoginModal";
import userSmall from "../../assets/icons/user-small.png";
import favourite from "../../assets/icons/heart.png";
import location from "../../assets/icons/location.png";
import order from "../../assets/icons/order.png";
import Catalog from "../catalog/Catalog";

const Navbar = () => {
  const [navLang, setNavLang] = useState([
    { id: 1, text: "UZ", selected: true },
    { id: 2, text: "EN", selected: false },
    { id: 3, text: "RU", selected: false },
  ]);
  const [openlang, setOpenlang] = useState(false);
  const setLang = (id) => {
    setNavLang(
      navLang.map((lang) =>
        lang.id === id
          ? { ...lang, selected: true }
          : { ...lang, selected: false }
      )
    );
    setOpenlang(!openlang);
  };
  const [modalShow, setModalShow] = React.useState(false);
  const [showUser, setShowUser] = useState(false);
  const [userName, setUserName] = useState("");
  const [openSettings, setOpenSettings] = useState(false);
  const [userSettings] = useState([
    { id: 1, img: userSmall, text: `Shaxsiy ma'lumotlar` },
    { id: 2, img: order, text: `Mening buyurtmalarim` },
    { id: 3, img: favourite, text: `Sevimlilar` },
    { id: 4, img: location, text: `Manzillar` },
  ]);

  const [openCatalog, setOpenCatalog] = useState(false);

  const logOut = () => {
    setShowUser(!showUser);
    setOpenSettings(!openSettings);
  };
  return (
    <div className="headerr">
      <div className="nav-wrapper d-flex">
        <Container>
          <div className="navv">
            <div className="nav-top">
              <Row>
                <Col></Col>
                <Col className="p-auto">
                  <div className="nav-call">
                    <MdEmail />
                    <span>Aloqa uchun</span>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="nav-lang">
            <p onClick={() => setOpenlang(!openlang)}>
              {navLang.find((lang) => lang.selected === true).text}
            </p>
            <ul className={`nav-lang-bottom ${openlang ? "d-block" : ""}`}>
              {navLang
                .filter((lang) => lang.selected !== true)
                .map((lang) => {
                  return (
                    <li key={lang.id} onClick={() => setLang(lang.id)}>
                      {lang.text}
                    </li>
                  );
                })}
            </ul>
          </div>

          <div className="nav-main">
            <Row>
              <Col xs={4}>
                <div className="nav-left">
                  <a href="/">
                    <img src={logo} alt="" />
                  </a>
                  <div
                    className="catalog"
                    onClick={() => setOpenCatalog(!openCatalog)}
                  >
                    <IoIosMenu />
                    <span>Katalog</span>
                  </div>
                </div>
              </Col>

              <Col className="formBtn" xs={5}>
                <Form>
                  <InputGroup>
                    <Form.Control
                      placeholder="Maxsulotlarni izlash"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                      <BsSearch />
                    </Button>
                  </InputGroup>
                </Form>
              </Col>

              <Col className="nav-right-wrapper" xs={3}>
                <div className="nav-right">
                  <div className="nav-icon">
                    <AiOutlineHeart />
                  </div>
                  <div className="nav-icon">
                    <AiOutlineShoppingCart />
                  </div>
                  <span
                    className={`p-text ${showUser ? "d-none" : ""}`}
                    onClick={() => setModalShow(true)}
                  >
                    Kirish
                  </span>
                  <div className={`user-icon ${showUser ? "" : "d-none"}`}>
                    <img
                      src={user}
                      alt=""
                      className="user-icon-img"
                      onClick={() => setOpenSettings(!openSettings)}
                    />
                    <div
                      className={`user-detail ${openSettings ? "" : "d-none"}`}
                    >
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="p-text" style={{ fontWeight: "656" }}>
                          {userName}
                        </div>
                        <div className="log-out p-text" onClick={logOut}>
                          Chiqish
                        </div>
                      </div>

                      <ul className="user-settings">
                        {userSettings.map((setting) => (
                          <li
                            key={setting.id}
                            onClick={() => setOpenSettings(false)}
                          >
                            <a href="#home">
                              <img src={setting.img} alt="location" />
                              <p>{setting.text}</p>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <LoginModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                    showuser={showUser}
                    setshowuser={setShowUser}
                    setusername={setUserName}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Container className={`${openCatalog ? "" : "d-none"}`}>
        <div className="catalog-wrapper">
          <Catalog openCatalog={openCatalog} setOpenCatalog={setOpenCatalog} />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
