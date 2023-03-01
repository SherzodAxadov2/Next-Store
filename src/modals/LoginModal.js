import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import ReactInputMask from "react-input-mask";
import "./login.css";

const LoginModal = (props) => {
  const [name, setnName] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");

  const getValues = () => {
    if (number && password && name) {
      props.onHide();
      props.setshowuser(!props.showuser);
      props.setusername(name);

      localStorage.setItem(
        "userData",
        JSON.stringify({
          name: `${name}`,
          number: `${number}`,
          password: `${password}`,
        })
      );
    }
  };
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Telefon raqam orqali kirish
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Control
              value={name}
              type="text"
              placeholder="Ism Sharifingiz"
              onChange={(e) => setnName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <ReactInputMask
              value={number}
              mask="+\9\9\8 (99) 999 99 99"
              maskChar="_"
              className="form-control"
              placeholder="Telefon raqam "
              onChange={(e) => setNumber(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              value={password}
              type="password"
              placeholder="Parol"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" onClick={getValues} className="modalBtn">
            Submit
          </Button>

          <a href="#home" onClick={props.onHide}>
            Parolni unutdingizmi ?
          </a>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
