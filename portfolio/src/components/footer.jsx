import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const footerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px",
    backgroundColor: "#0D0D0D", // Black color
    color: "#F5F5F5", // White color
  };

  const containerStyle = {
    textAlign: "center",
    maxWidth: "1200px",
    width: "100%",
    padding: "0 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  };

  const linksStyle = {
    listStyle: "none",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "10px 0",
    margin: "0",
    fontSize: "14px",
  };

  const linkItemStyle = {
    color: "#50C878", // Emerald color
    textDecoration: "none",
    transition: "color 0.3s",
  };

  const linkHoverStyle = {
    color: "#48B46C", // Slightly lighter emerald on hover
  };

  const socialMediaStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "15px",
  };

  const iconStyle = {
    fontSize: "24px",
    color: "#50C878", // Emerald color
    cursor: "pointer",
    transition: "transform 0.3s, color 0.3s",
  };

  const iconHoverStyle = {
    transform: "scale(1.2)",
    color: "#48B46C", // Lighter emerald on hover
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>&copy; {new Date().getFullYear()} My App Name. All Rights Reserved.</p>
        <ul style={linksStyle}>
          <li>
            <a
              href="/privacy-policy"
              style={linkItemStyle}
              onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
              onMouseOut={(e) => (e.target.style.color = linkItemStyle.color)}
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/terms"
              style={linkItemStyle}
              onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
              onMouseOut={(e) => (e.target.style.color = linkItemStyle.color)}
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="/contact"
              style={linkItemStyle}
              onMouseOver={(e) => (e.target.style.color = linkHoverStyle.color)}
              onMouseOut={(e) => (e.target.style.color = linkItemStyle.color)}
            >
              Contact
            </a>
          </li>
        </ul>
        <div style={socialMediaStyle}>
          <FontAwesomeIcon
            icon={faFacebook}
            style={iconStyle}
            onMouseOver={(e) => {
              e.target.style.transform = iconHoverStyle.transform;
              e.target.style.color = iconHoverStyle.color;
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "none";
              e.target.style.color = iconStyle.color;
            }}
          />
          <FontAwesomeIcon
            icon={faTwitter}
            style={iconStyle}
            onMouseOver={(e) => {
              e.target.style.transform = iconHoverStyle.transform;
              e.target.style.color = iconHoverStyle.color;
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "none";
              e.target.style.color = iconStyle.color;
            }}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            style={iconStyle}
            onMouseOver={(e) => {
              e.target.style.transform = iconHoverStyle.transform;
              e.target.style.color = iconHoverStyle.color;
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "none";
              e.target.style.color = iconStyle.color;
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
