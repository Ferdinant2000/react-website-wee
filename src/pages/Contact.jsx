import React from "react";
import Common from "./common/Common";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");

  const getName = (event) => {
    setName(event.target.value);
  };
  const getEmail = (event) => {
    setEmail(event.target.value);
  };
  const getInterest = (event) => {
    setInterest(event.target.value);
  };
  const getMessage = (event) => {
    setMessage(event.target.value);
  };

  const sendData = (event) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setInterest("")
    setMessage("")
  };
  return (
    <>
      <section className="contact creative">
        <div className="container">
          <div className="itemContent">
            <Common title="contact" />
            <div className="content flex">
              <div className="contentRight">
                <img src="./images/contact-bg.jpg" alt="" />
              </div>
              <div className="contentLeft">
                <span>
                  <i className="fa fa-map-marker-alt"> </i>
                  401 Broadway, 24th Floor, NY 10013.
                </span>
                <br />
                <span>
                  <i className="fa fa-envelope"></i>
                  firdavskomolitdinov@gmail.com
                </span>
                <br />
                <span>
                  <i className="fa fa-phone"></i>
                  <a href="https://t.me/Ferdinant_2000">
                    +7 (917)-346-5383</a>
                </span>

                <form onSubmit={sendData}>
                  <input
                    type="text"
                    placeholder="* YOUR NAME"
                    value={name}
                    onChange={getName}
                  />
                  <input type="text"
                    placeholder="* YOUR EMAIL"
                    name="" id="" onChange={getEmail}
                    value={email} />
                  <input
                    type="text"
                    placeholder="* WHAT ARE YOU INTERSTED IN?  "
                    name=""
                    id=""
                    onChange={getInterest}
                    value={interest}
                  />
                  <textarea cols="30" rows="10" placeholder="YOUR MESSAGE" onChange={getMessage} value={message}>

                  </textarea>
                  <button className="primary-btn">
                    SUBMIT
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;