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
              <img className={`title ${createFadeInClass()}`} width={300} height={300} src="/images/Leila profile.jpg"/>
              <p className={`subsubTitle ${createFadeInClass()}`}>
                Feel free to read short description about me.
              </p>
            </div>
          </Col>
          <Col md="6">
            <div className={`${createFadeInClass()}`}>
              <p>
                My name is Leila Faez and I am an experienced software engineer
                and full-stack developer.{" "}
              </p>
              <p>
                I have a Master's degree in Software Engineer and several years
                of experience working on a wide range of roles and projects from
                scrum master to system analyst.
              </p>
              <p>
                Throughout my career, I have acquired advanced technical
                knowledge and the ability to explain programming topics clearly
                and in detail to a broad audience.
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
