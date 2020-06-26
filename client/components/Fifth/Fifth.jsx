import * as React from "react";

export default function Fifth() {
  return (
    <div className="fifth screen">
      <div className="text">Visit Today!</div>
      <div id="container">
        <div id="find">
          <h2 className="text">Find us!</h2>
          <div id="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.839462266226!2d-97.81465978561103!3d30.213129081821222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b4b65e056c2bd%3A0x3dc39540857eb165!2s2617%20Carlow%20Dr%2C%20Austin%2C%20TX%2078745!5e0!3m2!1sen!2sus!4v1593124461418!5m2!1sen!2sus" ></iframe>
          </div>
        </div>
        <div id="touch">
          <h2 className="text">Get In Touch!</h2>
          <h3 className="text">2617 Carlow Dr.</h3>
          <h3 className="text">512 971-9303</h3>
        </div>
      </div>
      <div id="footer">by Mark Fuechec</div>
    </div>
  );
}
