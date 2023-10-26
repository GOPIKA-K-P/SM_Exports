import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
//import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from 'react-on-screen';
import React from "react";
import axios from "axios";
import './Contact.css'
const Contact = () => {
  const [formData, setFormData] = useState({
    // fname:"",
    // lname:"",
    from: "",
    // phone: "",
    text: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const res = await axios.post(
        "http://localhost:8000/api/email/",
        formData
      );
      console.log(res.data);
      setFormData({
        // fname:"",
        // lname:"",
        from: "",
        // phone: "",
        text: "",
      });
      alert("Your message has been sent!");
    } catch (err) {
      console.error(err);
    }
  };
  
  return (
    <section className="contact mt-5" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdCUyMHVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60'} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form className="contact-form" onSubmit={handleSubmit}>

                    
                    
                    <Col size={12} sm={6} className="px-1">
                    <input
          type="email"
          name="from"
          id="from"
          value={formData.from}
          onChange={handleChange}
          placeholder="Email"
          required
        />                    </Col>
                    
                    <Col size={12} className="px-1">
                    <textarea
          name="text"
          id="text"
          placeholder="Message"

          value={formData.text}
          onChange={handleChange}
          required
        />    
                    </Col>
                    <button type="submit">Send</button>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Contact