import React from "react";
import styled from "styled-components";
import "./Login.css";
import banner from "./banner.png";
import sm_logo from "./sm-logo.png";


const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: top;
  padding: 40px;
`;


const Login: React.FC = () => {
  return (
    <Container>
      <div className="bg">
        <img src={banner} alt="bg" />
      </div>
      <div className="signin-box">
        <div className="top">
          <img src={sm_logo} alt="sm-logo" />
          <span>Don't have an account? <a href="#">Request Demo</a></span>
        </div>
        <div className="main">
          <div>
            <form action="">

            </form>
          </div>
        </div>
      </div>


      
    </Container>
  );
};

export default Login;
