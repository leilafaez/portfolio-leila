import { useEffect } from "react";
import BaseLayout from "@/component/layouts/BaseLayout";
import BasePage from "@/component/BasePage";
import { useGetUser } from "@/actions/user";
import { Row,Col } from "reactstrap";


const About = () => {
  
    const { data, loading } = useGetUser();
    
    useEffect(()=>{
      return () =>{
        window.__isAboutLoaded = true;
      }
    },[])

    const createFadeInClass =()=>{
      if(typeof window !== "undefined"){
        return window.__isAboutLoaded ? "" : "fadein";
      }
      return "fadein";
    }

  return (
    <BaseLayout user={data} loading={loading}>
      <BasePage className="about-page">
        <Row className="mt-5">
          <Col md="6">
            <div className="left-side">
              <h1 className={`title ${createFadeInClass()}`}>Hello, Welcome</h1>
              {/* <h4 className={`subtitle ${createFadeInClass()}`}>
                To About Page
              </h4> */}
              <img
                className={`image ${createFadeInClass()}`}
                src="/images/Leila profile.jpg"
              />
              <p className={`subsubTitle ${createFadeInClass()}`}>
                {/* Feel free to read short description about me. */}
              </p>
            </div>
          </Col>
          <Col md="6">
            <div className={`right-side ${createFadeInClass()}`}>
              <p>
                Welcome to my portfolio website! I'm Leila Faez, and I'm
                passionate about the world of technology and software
                development.{" "}
              </p>
              <p>
                {/* With a Master's degree in Software Engineering and several years
                of diverse experience, I've had the privilege of wearing
                multiple hats in the software industry, from being a Scrum
                Master to a System Analyst. This journey has not only sharpened
                my technical skills but also enriched my ability to convey
                complex programming concepts in a clear and comprehensible
                manner, making me a versatile communicator in the realm of
                technology. */}
              </p>
              <p>
                What truly drives me in this field is my insatiable curiosity
                and relentless desire to stay on the cutting edge of software
                development. I'm constantly seeking opportunities to innovate
                and elevate the user experience.
              </p>
              <p>
                This portfolio is a window into my world of software
                engineering, a place where my work, my interests, and my
                commitment to excellence converge. Feel free to explore the
                projects I've shared here, and don't hesitate to reach out if
                you'd like to collaborate, share ideas, or simply chat about the
                exciting and ever-evolving world of technology.
              </p>
            </div>
          </Col>
        </Row>
        ;
      </BasePage>
    </BaseLayout>
  );
};

export default About;
