import React, { useState, useEffect } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
const FileDownload = require("js-file-download");

const MainScreen = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);

  const [format, setFormat] = useState("Letter");
  // const [printBackground, setPrintBackground] = req.query.printBackground === 0 ? false : true || true;
  const [top, setTop] = useState("20px");
  const [bottom, setBottom] = useState("40px");
  const [left, setLeft] = useState("20px");
  const [right, setRight] = useState("20px");

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(url);

    axios({
      url: `/pdf?target=${url}&format=${format}&top=${top}&bottom=${bottom}&left=${left}&right=${right}`,
      method: "GET",
      responseType: "blob", // Important
    })
      .then((response) => {
        FileDownload(response.data, "webscreenpdf.pdf");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
        setMessage(true);
      });
  };

  useEffect(() => {
    console.log(loading);
  }, [loading]);

  return (
    <FormContainer>
      <h1>Welcome,</h1>
      {loading ? (
        <Loader />
      ) : message ? (
        <Message variant="danger">
          Something is wrong. Please check your URL and inputs.{" "}
          <span
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Try again.
          </span>{" "}
        </Message>
      ) : (
        <Form>
          <Form.Group controlId="url">
            <Form.Label>
              Enter your URL below to convert into PDF<span style={{ color: "red" }}>*</span> (Please include http:// or
              https://){" "}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter URL"
              value={url}
              required
              onChange={(e) => setUrl(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Row>
            <Col sm={3} md={6} className="my-1">
              <Form.Label htmlFor="top">Top</Form.Label>
              <Form.Control onChange={(e) => setTop(e.target.value)} type="text" id="top" placeholder="20px" />
            </Col>

            <Col sm={3} md={6} className="my-1">
              <Form.Label htmlFor="bottom">Bottom</Form.Label>
              <Form.Control onChange={(e) => setBottom(e.target.value)} id="bottom" placeholder="40px" />
            </Col>

            <Col sm={3} md={6} className="my-1">
              <Form.Label htmlFor="left">Left</Form.Label>
              <Form.Control onChange={(e) => setLeft(e.target.value)} id="left" placeholder="20px" />
            </Col>

            <Col sm={3} md={6} className="my-1">
              <Form.Label htmlFor="right">Right</Form.Label>
              <Form.Control onChange={(e) => setRight(e.target.value)} id="right" placeholder="20px" />
            </Col>

            <Col sm={3} md={6} className="my-1">
              <Form.Label htmlFor="format">Format</Form.Label>
              <Form.Control
                onChange={(e) => setFormat(e.target.value)}
                id="format"
                as="select"
                className="mr-sm-2 select"
                custom
              >
                <option value="Letter">Letter</option>
                <option value="Legal">Legal</option>
                <option value="Tabloid">Tabloid</option>
                <option value="Ledger">Ledger</option>
                <option value="A0">A0</option>
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="A3">A3</option>
                <option value="A4">A4</option>
                <option value="A5">A5</option>
                <option value="A6">A6</option>
              </Form.Control>
            </Col>
          </Row>

          <br />

          <Button type="submit" disabled={url === ""} variant="primary" className="my-auto" onClick={submitHandler}>
            GET PDF
          </Button>
        </Form>
      )}
    </FormContainer>
  );
};

export default MainScreen;
