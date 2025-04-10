import { useState,useRef, useEffect } from "react";
import BaseLayout from "@/component/layouts/BaseLayout"
import {Container , Row,Col} from "reactstrap"
import React from "react";
import Typed from "react-typed";
import { useGetUser } from "@/actions/user";

const Roles = ["Developer","Scrum master","Tech lover","Team player"];

const Index = () => {
  const[isFlipping,setIsFlipping]=useState(false);
  const { data,loading } = useGetUser();
  const flipInterval =useRef();

  useEffect(()=>{
    startAnimation();
    return ()=> flipInterval.current && clearInterval(flipInterval.current)
  },[])

  const startAnimation =()=>{
   flipInterval.current= setInterval(()=>{
      setIsFlipping(prevFlipping=>!prevFlipping)
    },10000)
  }

  return (
    <BaseLayout
      user={data}
      loading={loading}
      navClass="transparent"
      className={`cover ${isFlipping ? "cover-orange" : "cover-blue"}`}
    >
      <div className="main-section">
        <div className="background-image">
          <img src="/images/background-index.png" />
        </div>
        <Container>
          <Row>
            <Col md="6">
              <div className="hero-section">
                <div className={`flipper ${isFlipping ? "isFlipping" : ""}`}>
                  <div className="front">
                    <div className="image image-1">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                    </div>

                    <div className="shadow-custom">
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>
                  <div className="back">
                    <div className="image image-2">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Have a look at my portfolio and job history.
                        </div>
                      </div>
                    </div>
                   
                    <div className="shadow-custom shadow-custom-orange">
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6" className="hero-welcome-wrapper">
              <div className="hero-welcome-text">
                <h1>
                  Welcome to the portfolio website of Leila Faez. Get informed,
                  collaborate and discover projects I was working on through the
                  years!
                </h1>
              </div>
              <Typed
                loop
                typeSpeed={70}
                backSpeed={70}
                strings={Roles}
                backDelay={1000}
                loopCount={0}
                showCursor
                className="self-typed"
                cursorChar="|"
              />
              <div className="hero-welcome-bio">
                <h1>Let's take a look on my work.</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>
  );
};
export default Index;