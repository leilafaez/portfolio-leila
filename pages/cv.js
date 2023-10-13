import BaseLayout from "@/component/layouts/BaseLayout";
import BasePage from "@/component/BasePage";
import { useGetUser } from "@/actions/user";
import { Row,Col } from "reactstrap";

const CV = () => {
    const { data, loading } = useGetUser();

  return (
    <BaseLayout user={data} loading={loading}>
    <BasePage>
      <Row>
        <Col md={{size:8 , offset:2}}>
          <iframe style={{width:"100%" , height:"800px"}} src="./Leila_Faez_cv.pdf"/>
        </Col>
      </Row>
      </BasePage>
    </BaseLayout>
  );
};

export default CV;
