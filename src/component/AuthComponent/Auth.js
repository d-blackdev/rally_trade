import React,{useState} from "react";
import { Button, Form } from "react-bootstrap";
import "./Auth.css";

const Auth = () => {
  const [show, setShow] = useState(false)
  const toggleShow = () => {
    setShow(true)
  }
  const toggleShow2 = () => {
    setShow(false)
  }
  return (
    <div className="auth mt-5">
      <h6 className="auth_header_text">
        SignUp with RallyTrade within minutes
      </h6>
      <div className="auth_content">
        <div className="auth_btn">
          <button
            type="button"
            className={!show ? "toggle_btn active_btn" : "toggle_btn"}
            onClick={toggleShow2}
          >
            Register
          </button>
          <button
            type="button"
            className={show ? "toggle_btn active_btn" : "toggle_btn"}
            onClick={toggleShow}
          >
            Login
          </button>
        </div>
        {/* Form one */}
        {!show ? (
          <form className="form_content1">
            <input
              type="text"
              className="input_field"
              placeholder="firstName"
            />
            <input
              type="text"
              className="input_field"
              placeholder="Last Name"
            />
            <input type="text" className="input_field" placeholder="Email" />
            <input
              type="text"
              className="input_field"
              placeholder="Phone Number"
            />
            <input type="text" className="input_field" placeholder="Country" />
            <div className="flex_input">
              <input type="checkbox" className="check_box" />
              <p className="span_text">
                I hereby state that I am over 18years old an have read,
                understood and accepted and I agree with Terms and Conditions{" "}
                <strong>(T&C)</strong> and other applicable documents, which are
                described below. I agree with the personal data processing by
                RallyTrade as stated in Privacy Policy
              </p>
            </div>
            <div className="check_boxes_cont d-flex">
              <div className="flex_cont1 d-flex">
                <div className="check_box1 d-flex mr-2">
                  <input type="checkbox" className="check_box" />
                  <p className="single_box_text ">Demo</p>
                </div>
                <div className="check_box1 d-flex">
                  <input type="checkbox" className="check_box" />
                  <p className="single_box_text ">Real</p>
                </div>
              </div>
              <div className="flex_cont1 d-flex">
                <div className="check_box1 d-flex mr-2">
                  <input type="checkbox" className="check_box" />
                  <p className="single_box_text ">USD</p>
                </div>
                <div className="check_box1 d-flex">
                  <input type="checkbox" className="check_box" />
                  <p className="single_box_text ">NGN</p>
                </div>
              </div>
            </div>
            <div className="submit_btn mt-3">
              <Button variant="success" block>
                Open Account
              </Button>
            </div>
          </form>
        ) : (
          <form className="form_content1 form_content2">
            <input
              type="text"
              className="input_field mb-5"
              placeholder="Email"
            />
            <input
              type="text"
              className="input_field mb-3"
              placeholder="Password"
            />

            <div className="flex_input">
              <input type="checkbox" className="check_box" />
              <p className="span_text">Remember me</p>
            </div>

            <div className="submit_btn submit_btn2">
              <Button variant="success" size="lg" block>
                LOGIN
              </Button>
            </div>
          </form>
        )}

       
      </div>
    </div>
  );
};

export default Auth;
