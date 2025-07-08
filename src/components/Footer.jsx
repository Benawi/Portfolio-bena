import React from "react";
import Container from "react-bootstrap/Container";
import codeImage from "./bena.png"
const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} id="getInTouch" className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <img src={codeImage} alt ="bena"/>  <br></br><br></br>
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          rel="noopener"
          href="https://github.com/Benawi"
          aria-label="My GitHub"
        > <span className="badge bg-dark">
            Habtamu Alemayehu
          </span>
        </a>{" "}
        {/* using <i className="fab fa-react" /> React */}
          <p>
          <small className="text-muted">
          📞 +251 92 647 3055<br></br> 
          <p>&copy; {new Date().getFullYear()} All rights reserved</p>
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
