import React from "react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_divider_outer">
          <div className="col-md-12 footer_divider"></div>
        </div>
        <p className="footer_text">
          © Mayowa Daniel {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};
